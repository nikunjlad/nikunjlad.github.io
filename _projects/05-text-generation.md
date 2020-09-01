---
title: "Text Generation using Long-Short Term Networks"
tagline: "Contains source code to generate sequence of text from model trained on large text corpus"
website: "https://github.com/nikunjlad/Text-Generation-using-LSTMs"
skills: ["PyTorch", "Python", "NumPy"]
---

Traditional Neural Networks or deep learning models, in general, cannot store information over successive layers 
(i.e these architectures lack memory component over time). However, LSTMs can remember relationships between instances 
and we can exploit this property to generate new sequences from a model trained on large sequence-based data. In this 
project given a large textual data of essays written by [Paul Graham](http://www.paulgraham.com/bio.html){:target="_blank"} 
(a computer scientist), we generate new sequences by understanding the underlying semantics using LSTMs