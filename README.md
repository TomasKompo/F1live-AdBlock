# Flive Popup Blocker

Rozšíření pro prohlížeč, které blokuje automaticky otevíraná reklamní okna na webu
[Flive](https://flive.cc.cd/).

## Features

- Přepisuje `window.open` na stránkách Flive.
- Zablokuje automaticky otevřená okna a vrátí `null`.
- Spouští se při načítání dokumentu (`document_start`).
- Funguje pouze na doméně `flive.cc.cd`.
- Neobsahuje vzdálené skripty, analytiku ani sběr osobních údajů.

## Instalace jako rozšíření

Tento projekt se instaluje ručně jako „unpacked extension“. Není potřeba jej
kompilovat ani instalovat pomocí balíčku.

### Chrome, Chromium, Brave a další prohlížeče založené na Chromium

1. Stáhněte nebo naklonujte tento repozitář do lokální složky.
2. Otevřete stránku `chrome://extensions`.
   - V Microsoft Edge použijte `edge://extensions`.
   - V Brave použijte `brave://extensions`.
3. Zapněte **Developer mode / Režim pro vývojáře**.
4. Klikněte na **Load unpacked / Načíst rozbalené**.
5. Vyberte složku `F1live-AdBlock`, ve které se nachází `manifest.json`.
6. Otevřete nebo znovu načtěte stránku `https://flive.cc.cd/`.

Po instalaci se rozšíření aktivuje automaticky na odpovídajících stránkách.
Samostatná ikona ani nastavení nejsou potřeba.

### Firefox

V aktuálních verzích Firefoxu lze rozšíření načíst dočasně pro vývoj a testování:

1. Otevřete `about:debugging#/runtime/this-firefox`.
2. Klikněte na **Load Temporary Add-on...**.
3. Vyberte soubor `manifest.json` z této složky.
4. Otevřete nebo znovu načtěte `https://flive.cc.cd/`.

Dočasné rozšíření ve Firefoxu se po zavření prohlížeče odstraní a je nutné jej
znovu načíst.

## Použití

Po načtení stránky na `flive.cc.cd` rozšíření automaticky nahradí nativní funkci
`window.open`. Pokus skriptu otevřít nové okno je zablokován a do konzole
prohlížeče se zapíše zpráva:

```text
[Flive Blocker] Blocked popup: ...
```

Při úspěšné aktivaci se zapíše:

```text
[Flive Blocker] Activated
```

### Ověření, že rozšíření běží

1. Otevřete `https://flive.cc.cd/`.
2. Stiskněte `F12` a otevřete kartu **Console**.
3. Vyhledejte zprávu `[Flive Blocker] Activated`.
4. Při zablokovaném popupu by se měla zobrazit zpráva `[Flive Blocker] Blocked popup`.

## Omezení

- Rozšíření blokuje volání `window.open`; není to obecný reklamní filtr.
- Neblokuje všechny typy reklam, přesměrování nebo popupy vytvořené jiným
  mechanismem.
- Je nastavené pouze pro `https://flive.cc.cd/*`. Na jiné doméně se nespustí.
- Protože se funkce `window.open` nahrazuje v hlavním světě stránky, může se
  chování některých legitimních funkcí webu změnit.

## Struktura projektu

```text
F1live-AdBlock/
├── manifest.json   # Konfigurace rozšíření
├── blocker.js      # Logika blokování popupů
└── README.md       # Dokumentace
```

## Úpravy a aktualizace

Po změně souborů:

1. Otevřete stránku rozšíření (`chrome://extensions` nebo odpovídající stránku
   vašeho prohlížeče).
2. U rozšíření klikněte na **Reload / Znovu načíst**.
3. Znovu načtěte stránku Flive.

Při změně `manifest.json` je nutné rozšíření také znovu načíst. Při změnách
`blocker.js` může být potřeba znovu načíst otevřenou kartu.

## Odinstalování

Na stránce pro správu rozšíření najděte **Flive Popup Blocker** a klikněte na
**Remove / Odebrat**.

## Soukromí

Rozšíření obsahuje pouze lokální kód. Neposílá data na žádný server, nepoužívá
analytiku a nemá přístup k jiným webům než k `https://flive.cc.cd/*`.

## Licence

Licence tohoto projektu zatím není v repozitáři uvedena. Před redistribucí
zkontrolujte licenční podmínky projektu a případně doplňte licenční soubor.

---

# Flive Popup Blocker (English)

A browser extension that blocks automatically opened advertising popups on
[Flive](https://flive.cc.cd/).

## Features

- Overrides `window.open` on Flive pages.
- Blocks automatically opened windows and returns `null`.
- Runs while the document is loading (`document_start`).
- Is limited to the `flive.cc.cd` domain.
- Contains no remote scripts, analytics, or personal-data collection.

## Installing it as an extension

This project is installed manually as an **unpacked extension**. It does not
need to be compiled or installed from a package.

### Chrome, Chromium, Brave, and other Chromium-based browsers

1. Download or clone this repository into a local folder.
2. Open `chrome://extensions`.
   - In Microsoft Edge, open `edge://extensions`.
   - In Brave, open `brave://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the `F1live-AdBlock` folder containing `manifest.json`.
6. Open or reload `https://flive.cc.cd/`.

After installation, the extension activates automatically on matching pages.
It does not require a separate icon or settings page.

### Firefox

Current Firefox versions can load the extension temporarily for development and
testing:

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select the `manifest.json` file from this folder.
4. Open or reload `https://flive.cc.cd/`.

Firefox removes temporary extensions when the browser closes, so the extension
must be loaded again afterwards.

## Usage

When a page on `flive.cc.cd` loads, the extension automatically replaces the
page's native `window.open` function. A script attempting to open a new window
is blocked, and the following message is written to the browser console:

```text
[Flive Blocker] Blocked popup: ...
```

When the extension is activated, it writes:

```text
[Flive Blocker] Activated
```

### Verifying that the extension is running

1. Open `https://flive.cc.cd/`.
2. Press `F12` and open the **Console** tab.
3. Look for `[Flive Blocker] Activated`.
4. When a popup is blocked, the console should show `[Flive Blocker] Blocked popup`.

## Limitations

- The extension blocks calls to `window.open`; it is not a general ad blocker.
- It does not block every type of advertisement, redirect, or popup created by
  another mechanism.
- It is configured only for `https://flive.cc.cd/*` and will not run on other
  domains.
- Because `window.open` is replaced in the page's main world, some legitimate
  website functionality may be affected.

## Project structure

```text
F1live-AdBlock/
├── manifest.json   # Extension configuration
├── blocker.js      # Popup-blocking logic
└── README.md       # Documentation
```

## Development and updates

After changing files:

1. Open the extensions management page (`chrome://extensions` or the
   equivalent page in your browser).
2. Click **Reload** for the extension.
3. Reload the Flive page.

When `manifest.json` changes, the extension must be reloaded as well. After
changing `blocker.js`, the open tab may also need to be reloaded.

## Uninstalling

On the extensions management page, find **Flive Popup Blocker** and click
**Remove**.

## Privacy

The extension contains only local code. It does not send data to any server,
use analytics, or access websites other than `https://flive.cc.cd/*`.

## License

This repository currently does not specify a license. Before redistributing
the project, check its licensing terms and add a license file if appropriate.