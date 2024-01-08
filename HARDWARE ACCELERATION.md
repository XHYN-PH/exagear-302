#### COMPATIBLE GPU(s)
| GPU        | DDRAW | VIRGL OVERLAY | LLVM RENDERER | VIRTIO-GPU | TURNIP | ZINK | DXVK |
| ---------- | ----- | ------------- | ------------- | ---------- | ------ | ---- | ---- |
| Mali GPUs  | SUPPORTED | SUPPORTED | SUPPORTED | NO | NO | NO | NO |
| PowerVR GPUs | SUPPORTED | SUPPORTED | SUPPORTED | NO | NO | NO | NO |
| Adreno 5xx | SUPPORTED | SUPPORTED | SUPPORTED | NO | NO | NO | NO |
| Adreno 6xx | SUPPORTED | SUPPORTED | SUPPORTED | SUPPORTED | SUPPORTED | SUPPORTED | YES |
| Adreno 7xx | SUPPORTED | SUPPORTED | SUPPORTED | UNKNOWN | PARTIALLY | PARTIALLY | YES |

#### VIRGL OVERLAY
- VirGL Overlay uses `virgl-renderer` as the renderer. To run VirGL Overlay in Exagear, you need any graphics accelerator with support for **OpenGL ES 2.1(3.0)** and higher. Author of original development VirGL Overlay is [Mittorn](https://github.com/mittorn/virglrenderer-android), author of modifications is [alexvorxx](https://github.com/alexvorxx/VirGL-Overlay-Rebuild).
#### VIRTIO-GPU
- VirtIO-GPU in Exagear uses `virgl_vtest_server`, OpenGL renderer uses open drivers Turnip+Zink. To work, you need an Adreno 616+ graphics accelerator. Adreno 610,612 are not supported.
#### TURNIP
- [Turnip](https://www.exagear.wiki/index.php?title=Turnip) open source Vulkan driver for Adreno. It uses the files `/dev/kgsl-3d0`, `/dev/dri/card0` to access the GPU. It requires Adreno 610+ GPU to run.
#### ZINK
- [Zink](https://www.exagear.wiki/index.php?title=Zink) translator of Vulkan to OpenGL, it can be run on any GPU supporting Vulkan. It can be useful for GPUs that support Vulkan but do not have full OpenGL, using OpenGL ES instead.
#### DDRAW & LLVM
- DDRAW is part of windows from very old OS, It supported all devices. While LLVM is software renderer which is very slow but good compatibility.

Turnip+Zink are part of the Mesa drivers.

---
