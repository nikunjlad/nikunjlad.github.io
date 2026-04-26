---
title: "Knightscope Inc."
tagline: "Sr. Machine Learning Engineer · Mountain View, CA"
website: "https://www.knightscope.com/"
duration: Jan 2021 – Present
---

<div class="role">
  <span class="role-title">Sr. Machine Learning Engineer</span>
  <span class="role-date">Jan 2025 – Present</span>
</div>

- Own the **AI/CV stack within the K7 ICM (Intelligence Control Module)** on Knightscope's next-generation autonomous security robot — including object detection (person, face, ALPR, thermal, vehicles) and live thermal streaming — developed to **NIST 800-53** security controls.
- Designed and implemented the consolidation of 3–4 disparate AI runtime pipelines into a single cross-platform stack on **Nvidia Jetson Xavier**, reducing duplicated maintenance work across product lines and lowering DevOps overhead.

<div class="role">
  <span class="role-title">Machine Learning Engineer</span>
  <span class="role-date">Jan 2021 – Dec 2024</span>
</div>

- **Sole ML engineer** owning Knightscope's end-to-end AI stack across **3 product lines and 100+ deployed robots** serving 50+ clients nationwide, with per-robot subscriptions ranging $30K–$100K annually.
- Supported Knightscope's **2022 IPO** (3PAO audit, FEDRAMP authorization) and subsequent **Federal ATO (Authority-to-Operate)** by porting AI inference workloads from Jetson edge devices onto a FIPS-eligible **x86 platform**, enabling the **first Gov-Cloud K5v5.2 deployment at the U.S. Department of Veterans Affairs** (Texas, 2024).
- Upgraded the AI software stack for the **K5v5.1 robot inaugurated at NYPD by Mayor Eric Adams (2023)** — Knightscope's first NYC city-government partnership.
- Migrated 100+ deployed robots from **Ubuntu 16.04 on Jetson TX1 to Ubuntu 18.04 on Jetson Xavier AGX**, introducing virtualenv-based isolation and **Ansible-driven OTA release workflows**.
- Migrated cloud inference from legacy Ubuntu 14.04 EC2 to 22.04 g4dn.xlarge behind an **Nginx + uWSGI + Flask** stack with self-healing workers, serving up to **10 req/s** across the fleet.
- Optimized real-time edge detection across the deployed fleet by **quantizing object detection models to INT8/FP16 via TensorRT** and adding a per-detector **ByteTrack** post-processing layer (Kalman filter with two-round association) — reducing **cellular costs by 20% and network bandwidth by 50%**.
- Authored a sales-process audit flagging gaps in client-facing feature representation, recommending fixes aimed at reducing churn on multi-year subscriptions.
