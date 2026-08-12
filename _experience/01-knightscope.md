---
title: "Knightscope Inc."
tagline: "Sr. Machine Learning Engineer · Sunnyvale, CA"
website: "https://www.knightscope.com/"
duration: Jan 2021 – Present
---

<div class="role">
  <span class="role-title">Sr. Machine Learning Engineer</span>
  <span class="role-date">Mar 2025 – Present</span>
</div>

- Contributing to a **natural-language search and question-answering system over security-incident imagery** from the robot fleet: embedding every frame with a **SigLIP** dual-encoder and indexing in **FAISS** so an operator can retrieve incident images by plain-English description. Top-k retrieved frames are passed with the question to **Qwen2.5-VL** (served via **Ollama**) to generate grounded answers that cite the specific frames each claim is drawn from. Evaluation is designed around **Recall@k / MRR** for retrieval and a cross-family **LLM-as-Judge (Claude API)** for scoring correctness and grounding, with a human-validated calibration step before trusting it at scale.
- Developed an **auto-labeling system** using multi-modal Vision-Language Models (**OWLv2 / Qwen**) to pre-annotate images for semi-supervised human labeling, **reducing manual labeling effort by 50%**.
- Devised a **DVC-based dataset versioning system** with images in **AWS S3** and labels in **PostgreSQL RDS**, tracking image/label version mappings in RDS to enable reproducible results and rollback-safe ML experimentation with **MLflow**.
- Fine-tuned transformer detector **RT-DETRv2-R50** and **YOLOv7/v9/v12** models for person and vehicle detection on **AWS EC2 g4dn.xlarge** instances. These models run real-time inference on the **Jetson** ecosystem over **4x GMSL/IP camera** input streams through a **GStreamer** pipeline leveraging accelerated **NVIDIA DeepStream** plugins, following **NIST 800-53** security standards.
- Improved **ALPR (Automatic License Plate Recognition)** accuracy by adding image pre-processing (**Adaptive Gamma Correction, CLAHE, Laplacian and Sobel edge enhancement**) to enhance and filter plates before OCR, plus a post-OCR consensus matching procedure using **Levenshtein distance** to cluster similar reads and **Needleman-Wunsch** alignment within each cluster to derive the consensus plate.

<div class="role">
  <span class="role-title">Machine Learning Engineer</span>
  <span class="role-date">Jan 2021 – Feb 2025</span>
</div>

- Owned the **AI/CV stack for real-time security-incident reporting** on **Jetson Xavier AGX** and **Jetson Orin NX** modules across **4 product types**, sustaining **~$5M in annual recurring revenue** across 50+ clients nationwide.
- Built the **infrared thermal detection and streaming pipeline** using the **FLIR Lepton 3.5** camera, combining a **YOLO-X** object detector with **Adaptive Relative Temperature Thresholding** to deliver real-time localized temperature information, streamed via a **GStreamer + RTSP** server for user-facing thermal video.
- Optimized real-time edge detection across the deployed fleet by **quantizing object detection models to INT8/FP16 via TensorRT** and adding a per-detector **ByteTrack** tracker to suppress duplicate alerts from spamming the server — reducing **cellular costs by 20% and network bandwidth by 50%**.
- Packaged the inference pipelines as **Dockerized services** deployed via **Docker Compose**, with telemetry monitoring through **Prometheus** and **Grafana**.
- Led live-server migrations from legacy **AWS EC2 (Ubuntu 14.04)** to **g4dn.xlarge (Ubuntu 22.04)**, collaborating cross-functionally with the cloud team on a **Blue-Green** transition of servers and traffic for **zero downtime**, and building a **FastAPI + Nginx** server with self-healing workers serving **~1000 req/s** from fleet robots.
- Designed and implemented the consolidation of **3–4 disparate AI pipelines into a unified cross-platform inference stack** compatible with **Jetson Xavier AGX / TX2** (JetPack 4.6, Ubuntu 18.04) and **Jetson Orin NX** (JetPack 6.0, Ubuntu 22.04).
