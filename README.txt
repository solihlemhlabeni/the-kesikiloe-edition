THE KESIKILOE EDITION — QUICK START

FILES
- index.html: the page structure
- style.css: colours, typography, spacing and responsive layout
- script.js: all editable text and image paths
- images/: put your 11 image files here (cover + 10 chapter photographs)

ADD / REPLACE PHOTOGRAPHS
1. Open the images folder.
2. Copy your photos into it.
3. Rename them to match these filenames:
   cover.jpg
   kesikiloe-01.jpg
   kesikiloe-02.jpg
   kesikiloe-03.jpg
   kesikiloe-04.jpg
   aura-01.jpg
   aura-02.jpg
   aura-03.jpg
   brother-01.jpg
   brother-02.jpg
   brother-03.jpg
4. If you prefer different filenames, edit the IMAGES object near the top of script.js.
   Keep the key names (cover, solo1, solo2, etc.) unchanged unless you also change the HTML.

EDIT THE WRITING
Open script.js and edit the CONTENT and CAPTIONS objects near the top.
Replace the text inside the quotation marks. Do not remove commas between entries.
The introduction, personal paragraphs, family paragraphs, letter and captions are all kept there.

PREVIEW
- On a computer, double-click index.html to open it in your browser.
- For a more reliable local preview, open the folder in VS Code and use the Live Server extension.
- On iPhone, upload the folder to a static host and open its URL. Local file preview on iOS is less reliable.

PUBLISH / SHARE PRIVATELY
A simple option is Netlify:
1. Visit https://app.netlify.com/drop
2. Sign in or create an account.
3. Drag the complete kesikiloe-edition folder (or its ZIP contents) onto the upload area.
4. Netlify will provide a public URL. You can change the site name in its site settings.
5. To keep the link discreet, share it only with the intended person. A normal static-hosting URL is not password-protected; for an actual password, use a hosting service/plan that supports access protection.

NOTES
- The page uses Google Fonts when internet access is available; fallback fonts are included.
- Missing images show a designed placeholder panel, not a broken-image icon.
- No music autoplays. The page is responsive and honours reduced-motion preferences.
- There are 11 image slots because the cover is separate from the 10 chapter photographs.
