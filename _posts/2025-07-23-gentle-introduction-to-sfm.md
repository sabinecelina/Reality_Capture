---
layout: page
title:  "A beginner‑friendly photogrammetry tutorial (German)"
date:   2025-07-23 06:21:00 +0530
categories: ["general"]
---

Du hast gerade angefangen, mit einem 3D-Drucker zu experimentieren? Oder du möchtest einfach lernen, wie man aus realen Objekten digitale 3D-Modelle erstellt? Dann ist dieses Tutorial genau das Richtige für dich.

Ich zeige dir Schritt für Schritt, wie du mit deiner Handykamera ein Objekt fotografierst und daraus mithilfe kostenloser Tools ein echtes 3D-Modell erzeugst – ganz ohne Vorkenntnisse.

## Objekt fotografieren

Als Erstes starten wir damit, das Objekt in möglichst hoher Qualität und mit konstantem Fokus aus verschiedenen Blickwinkeln zu fotografieren.

Achte auf folgende Punkte, damit dein Objekt möglichst gut modelliert werden kann:

- **Material:** Das Objekt sollte **nicht spiegeln** – also kein Glas, Metall oder glänzender Kunststoff. Je **matter und texturierter** die Oberfläche, desto besser.
- **Licht:** Verwende **diffuses Licht**. Bewölkter Himmel oder gleichmäßige künstliche Beleuchtung (z. B. Softbox oder Schreibtischlampe mit Papier davor) funktionieren sehr gut. Vermeide direkte Sonne oder starke Schatten.
- **Bewegung:** **Bewege dich rund um das Objekt**, nicht das Objekt selbst. Ideal ist ein **Kreis in gleichmäßigem Abstand**, erst auf Augenhöhe, dann leicht von oben und unten.
- **Überlappung:** Jede Aufnahme sollte sich **mindestens 60–80 % mit der vorherigen überlappen** – sonst erkennt die Software die Geometrie nicht.
- **Kamera:** Nutze eine Kamera mit möglichst wenig Rauschverhalten (z. B. neuere Smartphones). Stelle den Fokus **manuell fest**, damit er sich beim Bewegen nicht ändert. Viele Handys haben keine Möglichkeit mehr, den Fokus manuell zu stellen, da hilft eine Drittanbietersoftware.

**Tipp:** Mache lieber **30–50 Bilder zu viel als zu wenig**. Du kannst später immer aussortieren – aber fehlende Blickwinkel ruinieren den 3D-Rekonstruktionsprozess.

Mein Objekt, das ich digitalisieren möchte, ist folgendes: 
<img class="oscar-img" src="/assets/oscar/frame_000000.jpg" alt="Beispiel-Frame 000000">
Es ist nicht ideal, hat Spieglungen und ein schwieriges Matieral, aber wir schauen mal, was daraus wird.
Ich habe das Objekt gefilmt und dann mit einem einfachen Python-Skript alle Frames aus dem Video extrahiert. Unten siehst du ein paar der extrahierten Frames, damit klar ist, woran wir arbeiten:


<div class="frame-gallery">
  {% assign oscar_frames = site.static_files | where_exp: "f", 'f.path contains "/assets/oscar/"' %}
  {% assign oscar_images = oscar_frames | where_exp: "f", 'f.extname == ".jpg" or f.extname == ".jpeg" or f.extname == ".png" or f.extname == ".JPG" or f.extname == ".JPEG" or f.extname == ".PNG"' %}
  {% assign oscar_sorted = oscar_images | sort: "name" %}
  {% for f in oscar_sorted %}
    <img src="{{ f.path | relative_url }}" alt="Frame {{ f.name }}">
  {% endfor %}
  {% comment %} Hinweis: Die Galerie bindet automatisch alle Bilder aus assets/oscar ein. {% endcomment %}
</div>

<details markdown="1">
  <summary>Python‑Beispiel: Frames aus einem Video extrahieren</summary>

```python
import os, cv2

video_path = "path/to/video.mp4"
output_dir = "assets/oscar"
frame_step = 30  # jeden 30. Frame speichern (~1 FPS bei 30 FPS Video)

os.makedirs(output_dir, exist_ok=True)
video = cv2.VideoCapture(video_path)
frame_index = 0

while True:
    ok, frame = video.read()
    if not ok:
        break
    if frame_index % frame_step == 0:
        cv2.imwrite(os.path.join(output_dir, f"frame_{frame_index:06d}.jpg"), frame)
    frame_index += 1

video.release()
```

<p>Hinweis: Installiere OpenCV für Python mit <code>pip install opencv-python</code>.</p>
</details>

## Von den Bildern zum 3D Objekt

Es gibt mehrere Wege, um aus Fotos ein 3D‑Objekt zu erzeugen. In diesem Abschnitt stelle ich verschiedene Tools vor – von kostenlos bis kommerziell.

### Agisoft Metashape (30‑Tage‑Testversion)

Agisoft Metashape ist ein kommerzielles Tool, das für 30 Tage kostenlos ausprobiert werden kann. Es eignet sich gut, um den kompletten Ablauf von Fotos bis hin zu einem fertigen 3D-Modell kennenzulernen. Du kannst unter "import" aber auch ein Video importieren. Der typische Workflow sieht so aus:

<div class="metashape-split">
  <div class="metashape-media">
    <img src="/assets/projects/metashape_02_workflow.png" alt="Metashape: Workflow">
    <div class="metashape-caption">Metashape: Workflow</div>
  </div>
  <div class="metashape-text" markdown="1">
1. Fotos importieren: Man startet mit einer Serie von Bildern, die rund um das Objekt aufgenommen wurden. Je mehr Überlappung zwischen den Bildern, desto besser.

2. Fotos ausrichten (Photo Alignment): Metashape sucht automatisch gleiche Bildpunkte in den Fotos und berechnet daraus die Position der Kamera für jedes Bild. Ergebnis: eine grobe Punktwolke, die schon die Form des Objekts andeutet.

3. Dichte Punktwolke erzeugen (Dense Cloud): Auf Basis der Kamerapositionen wird eine detaillierte Punktwolke erstellt, die mehr Punkte und feinere Details enthält.

4. Mesh berechnen: Aus der Punktwolke generiert Metashape eine durchgehende Oberfläche, also ein Polygonnetz (Mesh).

5. Textur erstellen: Zum Schluss werden die Originalfotos auf das Mesh projiziert. Dadurch bekommt das Modell eine realistische Oberfläche mit Farben und Details.

6. Exportieren: Das fertige 3D-Modell lässt sich in gängigen Formaten (z. B. OBJ oder FBX) abspeichern und in andere Programme weiterladen.

Das Ganze läuft im Wesentlichen halbautomatisch ab: Man klickt sich durch die Schritte, und Metashape übernimmt die eigentliche Rechenarbeit. Für Einsteiger ist es praktisch, weil man dabei direkt versteht, welche Phasen es im Prozess gibt, ohne sich mit komplizierter Konfiguration herumzuschlagen.
  </div>
</div>

Kurz‑Workflow:
- Fotos importieren: `Datei → Fotos hinzufügen`
- Fotos ausrichten: `Arbeitsablauf → Fotos ausrichten`
- Spärliche Punktwolke säubern und den `Begrenzungsrahmen` eng um das Objekt legen
- Berechnung: `Arbeitsablauf → Tiefenkarten erstellen` → `Dichte Punktwolke erstellen`
- Mesh (Netz) erstellen: `Arbeitsablauf → Mesh erstellen` (Quelle: `Tiefenkarten`)
- Textur erstellen: `Arbeitsablauf → Textur erstellen` (Abbildungsmodus: `Mosaik`, Auflösung: `4k–8k`, `Lücken füllen: Ein`)
- Exportieren: `Datei → Exportieren` (z. B. `OBJ / PLY / GLB`)


