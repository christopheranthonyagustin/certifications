import pypandoc
import shutil
from pathlib import Path

content = """# Professional Portfolio

A structured collection of my **professional experience, project work, and technical credentials**.

## 📁 Repository Structure

| Folder | Purpose |
|---|---|
| 📂 `Projects/` | Real-world technology projects, case studies, and technical work |
| 📋 `project-manager/` | Project management experience, delivery artifacts, and PM documentation |
| 🎓 `Certifications/` | Professional certifications, credentials, and verification |
| ⚙️ `.github/` | GitHub repository configuration |

## 🔎 Where to Start

- **Projects** → Explore my technology experience and project case studies
- **Project Manager** → Review my PM delivery experience and artifacts
- **Certifications** → View my professional credentials

---

**Technical Project Management • Enterprise Technology • Systems Integration • Cloud • Software Delivery**
"""

tmp = "/tmp/portfolio_readme.md"
final = "/mnt/data/Portfolio_README.md"

pypandoc.convert_text(
    content,
    "md",
    format="md",
    outputfile=tmp,
    extra_args=["--standalone"]
)

shutil.copyfile(tmp, final)
print(final)
