# ALTCHA PoW

## Introduction

ALTCHA Proof-of-Work (PoW) v2 is a client-side computational puzzle designed to mitigate automated abuse. It is based on established password-based _Key Derivation Functions (KDFs)_ such as **PBKDF2**, **Argon2id**, and **Scrypt**.

Unlike v1, which relied on repeated lightweight SHA hashing, PoW v2 leverages the inherent computational cost of KDFs. Clients must perform repeated key derivations until the derived output satisfies a server-defined difficulty condition.

The system is intentionally asymmetric: solving is computationally expensive for the client, while verification remains relatively fast and inexpensive for the server.

## Source Code

- [TypeScript Implementation](https://github.com/altcha-org/altcha/tree/v3/src/pow.ts)
- [CLI Utility (C++)](https://github.com/altcha-org/altcha-lib-cpp)

## Design Goals

- **Performance:** Maximize client-side performance using native PBKDF2 (or WASM-based Argon2id / Scrypt) and Web Workers for parallel execution, ensuring low friction for legitimate users.
- **Asymmetric Complexity:** Keep server verification fast by requiring only a single KDF execution and one HMAC validation for the signature.
- **Security & Robustness:** Use well-vetted cryptographic primitives and structured, canonical JSON parameters to ensure strict validation and isolation.
- **Extensibility:** Support custom KDFs and additional parameters for future flexibility.

## Supported Algorithms

The following table compares the algorithms supported by ALTCHA PoW v2.

| Algorithm    | GPU/ASIC Resistance | Browser Implementation  | Server Verification |
| ------------ | ------------------- | ----------------------- | ------------------- |
| **SHA**      | Very Low            | Native (`SubtleCrypto`) | Very Fast           |
| **PBKDF2**   | Low                 | Native (`SubtleCrypto`) | Very Fast           |
| **Scrypt**   | Moderate            | WASM                    | Moderate            |
| **Argon2id** | Maximum             | WASM                    | Moderate            |

### Memory-Hard Algorithms

While CPU-bound PoW mechanisms are effective against basic automated abuse, sophisticated attackers may use specialized hardware to bypass them. To counter this, **PoW v2 supports memory-hard algorithms** — specifically **Argon2id** and **Scrypt**.

By utilizing the `memoryCost` parameter, these algorithms require a significant amount of RAM to compute. This design provides several key advantages:

- **ASIC/GPU Resistance:** Memory-intensive requirements neutralize the advantage of hardware acceleration (ASICs/GPUs), which typically rely on high-speed parallel processing with limited per-core memory.
- **Leveling the Playing Field:** By shifting the bottleneck from raw CPU cycles to memory bandwidth, the performance gap between a standard consumer device and a specialized attacking rig is drastically narrowed.
- **Configurable Security:** Operators can tune the memory requirements to match the current threat landscape, ensuring the mechanism remains effective as hardware evolves.

### Which Algorithm Should You Use?

#### **PBKDF2 (Recommended)**

**Best for general-purpose use and wide device compatibility.** Because it leverages the browser's native Web Crypto API, PBKDF2 is exceptionally efficient across a **wide range of hardware, from low-end mobile devices to high-end desktops**. It requires no additional WASM binaries, ensuring a lightweight and smooth experience for legitimate users while effectively deterring automated bots.

#### **Argon2id**

**Best for targeted defense against specialized hardware and bot farms.** Use this when you need to mitigate high-throughput automated traffic or attacks from adversaries using GPUs and ASICs. By requiring a significant, dedicated memory footprint per attempt, Argon2id is specifically designed to **eliminate bot farms and specialized cracking rigs**. It forces attackers to exhaust their physical RAM, effectively capping their concurrent request capacity and making large-scale flood attacks prohibitively expensive.

#### **Scrypt**

**A mature, memory-hard alternative for legacy or specific hardware environments.** Choose scrypt if your existing infrastructure requires a long-standing, battle-tested standard or if Argon2id is not yet available in your environment. While scrypt was the first to introduce memory-hardness to fight hardware acceleration, it is **more susceptible to optimization by modern ASICs** via "Time-Memory Trade-offs." It remains a strong choice for general memory-intensive protection but is less effective than Argon2id at neutralizing dedicated, custom-built cracking hardware.

#### **SHA**

**Legacy and resource-constrained environments.** Ideal for environments with very limited processing power or limited RAM. While it has the lowest verification cost, it is the most vulnerable to hardware acceleration, as it lacks memory-hardness and can be easily bypassed by attackers with GPUs.

## Performance

The JavaScript implementation uses the browser’s native `crypto.subtle` API combined with Web Workers.

- **Native Cryptography:** PBKDF2 performance is comparable to native C/C++ implementations using OpenSSL, avoiding inefficient JavaScript hash loops.
- **Parallel Execution:** Web Workers distribute work across CPU cores, significantly reducing solution time on multicore devices.

## Effort Modes

ALTCHA PoW v2 supports two effort modes that define how client work is determined and how strictly the server controls computational cost. Both modes use the same cryptographic primitives but differ in how difficulty is enforced and verified.

### Deterministic Effort Mode (Recommended)

In **deterministic effort mode**, the server precisely defines the exact amount of work the client must perform. The server precomputes a target derived key for a specific `counter` value. It then exposes a portion of this key as the `keyPrefix`, accompanied by a `keySignature` (an HMAC signature of the whole derived key), which allows for efficient server-side verification.

To ensure the client genuinely performs the computation, the target `counter` is randomly selected within an integer range for every challenge.

The client must find the exact counter that reproduces the `keyPrefix`, which requires executing KDF iterations starting from 0 up to that counter.

- **Difficulty Model:** Predictable  
  The client performs a predictable, server-defined amount of work.
- **Client Cost:** Predictable  
  The client always performs exactly as many KDF iterations as the randomly chosen target counter.
- **Server Cost:** Low (Verification) / Moderate (Generation)  
  One KDF execution is required during challenge generation, but verification is very fast.

**Use cases:**

- **General-purpose protection**
- Security-sensitive operations
- Paid APIs or authenticated users
- Situations requiring predictable throttling or rate shaping

**Important:**
Challenge generation in this mode should be protected (e.g., via rate-limiting) to prevent it from being used as a server-side DoS vector due to the KDF cost during generation.

**The deterministic effort mode provides the most consistent user experience and is the recommended default for most applications.**

### Probabilistic Effort Mode

In **probabilistic effort mode**, the server defines difficulty probabilistically using the `keyPrefix` parameter. The client repeatedly derives keys with increasing `counter` values until the output matches a prefix, such as `00`.

- **Difficulty Model:** Probabilistic  
  The expected number of iterations is fixed, but the exact number required varies per challenge.
- **Client Cost:** Variable  
  Average solving time is predictable, but individual challenges may complete significantly faster or slower (luck-based).
- **Server Cost:** Low (Generation) / Moderate (Verification)  
  Server generation is very fast, while one KDF execution is required to verify the solution.

**Use cases:**

- High-throughput endpoints where generation overhead must be near zero
- Resource-constrained servers (IoT or edge computing)
- Anonymous or unauthenticated requests where high variance is acceptable

### Mode Comparison

| Property                | Deterministic Effort (Recommended) | Probabilistic Effort     |
| ----------------------- | ---------------------------------- | ------------------------ |
| **Client effort**       | Predictable / Fixed                | Variable / Probabilistic |
| **Difficulty control**  | Exact                              | Statistical              |
| **Server generation**   | 1 KDF + 2 HMAC                     | 1 HMAC                   |
| **Server verification** | 2 HMAC                             | 1 KDF + 1 HMAC           |
| **User Experience**     | Consistent                         | Variable                 |
| **Scalability**         | Good                               | Excellent                |

Both modes are interoperable and can coexist within the same system, allowing difficulty to be adjusted dynamically based on endpoint risk, authentication state, or traffic patterns.

## Configuring Complexity

The computational effort required to solve a challenge can be adjusted using the following parameters:

- `cost`: The primary complexity factor for the KDF (e.g., iterations).
- `memoryCost`: Increases RAM requirements to resist hardware acceleration (Argon2id and Scrypt only).
- `keyPrefix`: Controls the statistical probability (expected iterations) in **probabilistic mode**.
- `counter`: Defines the exact number of iterations in **deterministic mode**.

Below are the **recommended configurations** designed to **balance security with support for common low-end devices**:

### PBKDF2

Modern browsers are highly optimized for PBKDF2/SHA-256. While SHA-384/512 are available, their browser performance is significantly slower compared to native OpenSSL implementations; therefore, **PBKDF2/SHA-256 is strongly recommended**.

- `cost`: `5000`
- `counter` (Deterministic Mode): `5000` to `10000`

### SHA

Choosing PBKDF2 is generally preferred over basic SHA due to its superior efficiency in modern browsers. Native API optimizations make PBKDF2 faster for clients while providing better security. Use basic SHA algorithms only in highly resource-restricted server environments or when PBKDF2 is not available in your specific runtime.

- `cost`: `1000`
- `counter` (Deterministic Mode): `1000` to `5000`

### Argon2id and Scrypt

Using Argon2id or Scrypt introduces a memory-bound bottleneck that significantly increases the cost for attackers. However, because these memory costs also apply to the server during verification, parameters should be tuned based on your server's available resources.

**Recommended Argon2id Parameters:**

- `cost`: `1` to `4`  
   Keep computational iterations low when `memoryCost` is high.
- `memoryCost`: `65536` to `131072` (64 to 128 MB)  
   The client device must be able to allocate `memoryCost * workers` in total RAM. A 64 to 128 MB range has been verified to work reliably on low-end Android devices.
- `parallelism`: `1`  
   In Argon2, this defines the number of independent memory "lanes." Since `hash-wasm` is single-threaded, increasing this will not speed up the client. However, higher parallelism can be configured to utilize multiple cores during server-side verification.
- `counter` (Deterministic Mode): `100` to `200`  
   Keep the counter relatively low when using high `memoryCost`.

**Recommended Scrypt Parameters:**

- `cost`: `65536` to `131072` (64 to 128 MB, must be a power of 2)  
   This provides a robust balance between security and speed.
- `memoryCost`: `8`  
   This is the standard recommended block size. Increasing it increases memory bandwidth requirements.
- `parallelism`: `1`  
   In Scrypt, the `parallelism` parameter acts as a direct multiplier for total work. Because `hash-wasm` is single-threaded, increasing `parallelism` will linearly increase the CPU time for the user. It is recommended to keep this at `1`.
- `counter` (Deterministic Mode): `100` to `200`

## PoW Mechanism Overview

### 1. Challenge Creation (Server)

The server generates a cryptographically secure challenge defining the difficulty and validation target.

**Key Parameters:**

- `algorithm`: Selected KDF.
- `cost`: KDF iteration count.
- `memoryCost`: Memory parameter for Argon2id/Scrypt.
- `nonce`: Unique challenge identifier.
- `salt`: Random KDF salt.
- `parallelism`: Parallelism parameter for Argon2id/Scrypt.
- `keyPrefix`: Target hexadecimal prefix.
- `keySignature`: In deterministic mode, the `keySignature` is added to allow faster solution verification.
- `signature`: HMAC over canonical challenge parameters.

```pseudo-code
FUNCTION createChallenge(algorithm, cost, keyPrefix, hmacSignatureSecret):
    salt = GenerateRandomHex(16)
    nonce = GenerateRandomHex(16)

    parameters = {
        algorithm,
        cost,
        nonce,
        salt,
        keyPrefix
    }

    signature = Hmac(hmacSignatureSecret, CanonicalJSON(parameters))
    RETURN { parameters, signature }
```

Note: The pseudo-code above generates a probabilistic (probabilistic effort) challenge. To implement deterministic mode, the server must perform an initial KDF calculation to derive the `keyPrefix` from a pre-selected target counter, rather than using a static value.

**Optional Parameters:**

- `expiresAt`: A unix timestamp determining the expiration time of the challenge.
- `data`: Arbitrary data as key-value map (object).

### 2. Solution Finding (Client)

The client searches for a `counter` that produces a derived key matching the required prefix.

```pseudo-code
FUNCTION solveChallenge(parameters):
    counter = 0
    LOOP:
        password = AppendUint32BE(parameters.nonce, counter)

        derivedKeyHex = DeriveKey(
            parameters.algorithm,
            parameters.salt,
            parameters.cost,
            password,
        )

        IF derivedKeyHex STARTS WITH parameters.keyPrefix:
            RETURN { counter, derivedKeyHex }

        counter += 1
```

### 3. Solution Verification (Server)

The server performs the following checks:

1. **Integrity:** Validate the HMAC signature.
2. **Expiration:** Validates optional `expiresAt` parameter.
3. **Correctness:** Execute a single KDF with the submitted `counter`.

```pseudo-code
FUNCTION verifySolution(challenge, solution, hmacSignatureSecret, hmacKeySignatureSecret):
    expectedSignatureHex = Hmac(hmacSignatureSecret, CanonicalJSON(challenge.parameters))
    IF challenge.signature != expectedSignatureHex:
        RETURN INVALID_SIGNATURE

    IF challenge.parameters.expiresAt && challenge.parameters.expiresAt < currentTimestamp:
        RETURN EXPIRED

    IF challenge.parameters.keySignature:
        expectedKeySignatureHex = Hmac(hmacKeySignatureSecret, HexToBuffer(solution.derivedKey))
        IF challenge.parameters.keySignature == expectedKeySignatureHex:
            RETURN VALID
        ELSE
            RETURN INVALID_SOLUTION

    password = AppendUint32BE(challenge.parameters.nonce, solution.counter)

    verifiedKeyHex = deriveKey(
        challenge.parameters.algorithm,
        challenge.parameters.salt,
        challenge.parameters.cost,
        password,
    )

    IF verifiedKeyHex == solution.derivedKey:
        RETURN VALID
    RETURN INVALID_SOLUTION
```

## Benchmarks

Tests performed in the deterministic mode with 8 workers, on several devices:

- `MBP`: MacBook Pro (M3 Pro)
- `AWS`: AWS EC2 instances
- `LEA`: Low-End Android (Samsung Galaxy A14)

### PBKDF2/SHA-256

Parameters: `cost: 5000`, `counter: 5000`

| Browser                |      Time |
| ---------------------- | --------: |
| MBP C++                |   ~650 ms |
| AWS m8i.2xlarge C++    | ~1,100 ms |
| MBP Chrome             | ~1,600 ms |
| AWS c5.2xlarge C++     | ~4,000 ms |
| LEA Chrome (4 threads) | ~9,500 ms |

### SHA-256

Parameters: `cost: 1000`, `counter: 1000`

| Browser                |       Time |
| ---------------------- | ---------: |
| MBP C++                |    ~320 ms |
| AWS m8i.2xlarge C++    |    ~550 ms |
| AWS c5.2xlarge C++     |    ~650 ms |
| MBP Chrome             |    ~750 ms |
| LEA Chrome (4 threads) | ~11,000 ms |

### Argon2id

Parameters: `cost: 2`, `memoryCost: 65536`, `parallelism: 1`, `counter: 100`

| Client                 |       Time |
| ---------------------- | ---------: |
| MBP C++                |  ~1,400 ms |
| MBP Chrome             |  ~1,700 ms |
| AWS m8i.2xlarge C++    |  ~1,700 ms |
| AWS c5.2xlarge C++     |  ~2,400 ms |
| LEA Chrome (4 threads) | ~23,000 ms |

### Scrypt

Parameters: `cost: 65536`, `memoryCost: 8`, `parallelism: 1`, `counter: 100`

| Browser                |       Time |
| ---------------------- | ---------: |
| MBP C++                |  ~1,700 ms |
| MBP Chrome             |  ~1,700 ms |
| AWS m8i.2xlarge C++    |  ~2,500 ms |
| AWS c5.2xlarge C++     |  ~3,900 ms |
| LEA Chrome (4 threads) | ~18,000 ms |
