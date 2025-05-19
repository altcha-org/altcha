# Security Vulnerability Disclosure Policy

We take security seriously and value the contributions of the security community. If you believe you have found a vulnerability in our services or software, we encourage you to report it responsibly so we can address it promptly.

### Reporting a Vulnerability

Please email your findings to published [security contacts](https://altcha.org/contact#reporting-security-issues).
To ensure confidentiality, we recommend encrypting your report using our [PGP key](https://altcha.org/pgp/security-public-key.asc).

Your report should include the following, where possible:

* A clear description of the vulnerability.
* A working proof of concept or detailed steps to reproduce the issue.
* Any relevant logs, screenshots, or code snippets that support your findings.

We will acknowledge receipt of your report within 5 business days, and keep you informed about the progress of our investigation.

### In-Scope

We welcome reports that:

* Demonstrate a real security risk (e.g., XSS, CSRF, SSRF, authentication bypass, privilege escalation, remote code execution, etc.).
* Affect our software, services, or infrastructure directly under our control.
* Include a valid proof of concept demonstrating how the vulnerability can be exploited.

### Out-of-Scope

The following issues are generally not eligible for rewards, but we still welcome these reports as they help us improve overall security hygiene:

* Reports from automated tools or scanners that lack actionable proof of exploitability.
* Security recommendations or best practices such as missing HTTP security headers, TLS configurations, DNS records, or server banners.
* Denial of service attacks that rely on large volumes of traffic.
* Rate limiting, CAPTCHA strength, or content/spam flooding.
* Clickjacking on pages without sensitive actions.
* Bugs that require root/jailbroken devices or outdated browsers.
* Issues in third-party services or libraries not managed by us.

While these may not be considered critical security vulnerabilities, we still care and may address them internally where appropriate. Your feedback helps us maintain a stronger security posture.

### Rewards

We may offer a discretionary reward (bounty) for valid, impactful reports that:

* Are submitted responsibly and in good faith.
* Are not the result of automated scanning.
* Include a clear demonstration of how the issue can be exploited in practice.

We do not offer rewards for:

* Reports generated solely through automated tools.
* Vulnerabilities lacking a proof of concept.
* Low-risk issues or theoretical attacks.

Reward amounts are determined at our discretion based on severity, impact, and quality of the report.

### Responsible Disclosure Guidelines

* Please do not publicly disclose vulnerabilities before we have had a chance to fix them.
* Do not access, modify, or delete data that does not belong to you.
* Avoid actions that could degrade or disrupt our services during testing.
* Only test systems that are clearly part of our infrastructure.

We thank you for helping us keep our services safe and secure.
