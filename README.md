# 🐾 Help-Pet

> Una piattaforma moderna per la segnalazione di animali smarriti, la ricerca di rifugi vicini e il supporto alle strutture di accoglienza.

[![React](https://img.shields.io/badge/React-19.2.5-blue?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-purple?style=flat-square&logo=vite)](https://vitejs.dev)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green?style=flat-square&logo=leaflet)](https://leafletjs.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

---

## 📋 Descrizione

**Help-Pet** è un'applicazione web dedicata al benessere animale che consente agli utenti di:

- 🗺️ **Visualizzare animali smarriti** su una mappa interattiva con pin color-coded
- 🔍 **Cercare rifugi** nelle vicinanze e filtrarli per tipo di servizio (adozione, affido)
- 📝 **Segnalare animali smarriti** tramite form intuitivo con upload foto
- 🏠 **Consultare dettagli** di ogni rifugio e gli animali disponibili

---

## ✨ Features

### 🗺️ Pagina Missing
- Mappa interattiva Leaflet con geolocalizzazione
- Pin color-coded degli animali smarriti
- Lista orizzontale scorrevole degli animali
- Form modale per segnalare nuovi animali

### 🏥 Pagina Shelters
- Lista di rifugi con filtri dinamici (TUTTI, ADOTTA, AFFIDA)
- Card dettagliata per ogni rifugio
- Link al dettaglio del rifugio con animali disponibili
- Distanza calcolata e info di contatto

### 🐕 Dettaglio Rifugio
- Info complete del rifugio
- Lista animali disponibili per l'adozione
- Layout responsivo con grid CSS

### ❌ Pagina 404
- Design accattivante con illustrazione
- Link di ritorno alla home

---

## 🛠️ Tech Stack

**Frontend:**
- React 19.2.5 - UI library
- Vite 8.0 - Build tool
- React Router v6 - Client-side routing
- Leaflet 1.9 - Interactive maps
- React-Leaflet 5.0 - React binding for Leaflet
- Lucide React 1.16 - Icon library
- CSS Modules - Scoped styling

**Backend:**
- Express.js - REST API
- JSON Server - Mock database
- Railway - Cloud hosting

---

## 📦 Installazione

### Prerequisiti
- Node.js >= 16
- npm o yarn

### Setup

1. Clona il repository
```bash
git clone https://github.com/mirkomentoITS/Help-Pet.git
cd Help-Pet
```

2. Installa le dipendenze
```bash
npm install
```

3. Avvia il server di sviluppo
```bash
npm run dev
```

4. Apri il browser a `http://localhost:5173`

---

## 🚀 Come Usare

### Visualizzare Animali Smarriti
1. Vai alla pagina Missing
2. Guarda la mappa interattiva con i pin degli animali smarriti
3. Clicca su un pin per leggere il nome dell'animale
4. Scorri la lista orizzontale per più dettagli

### Cercare Rifugi
1. Vai alla pagina Shelters
2. Usa i filtri (TUTTI, ADOTTA, AFFIDA)
3. Clicca su un rifugio per vedere gli animali disponibili

### Segnalare un Animale Smarrito
1. Clicca il bottone AGGIUNGI nella pagina Missing
2. Compila il form con i dati dell'animale
3. Clicca SEND

---

## 📁 Struttura del Progetto

```
src/
├── components/
│   ├── animalform/        # Form per segnalare animali
│   ├── cards/             # Card componenti
│   ├── lists/             # List componenti
│   ├── mapview/           # Mappa interattiva
│   ├── sidebar/           # Navigazione principale
│   └── button/            # Bottone riutilizzabile
├── layouts/
│   └── BasicLayout.jsx    # Layout base
├── pages/
│   ├── missing/           # Pagina animali smarriti
│   ├── shelter/           # Pagina rifugi
│   ├── animal/            # Dettaglio rifugio
│   └── notfound/          # Pagina 404
├── assets/                # Immagini e icone
├── App.jsx                # Router principale
└── main.jsx               # Entry point
```

---

## 🔗 API Endpoints

**Base URL:** `https://help-pet.up.railway.app/api`

### Shelters
- `GET /shelters` - Tutti i rifugi
- `GET /shelters?placement=adozione` - Solo adozione
- `GET /shelters?placement=affido` - Solo affido
- `GET /shelters/:id` - Dettaglio rifugio

### Animals
- `GET /animals` - Tutti gli animali
- `GET /animals?shelter=IT01` - Animali di un rifugio

### Missing
- `GET /missings` - Tutti gli animali smarriti
- `POST /missings` - Segnala nuovo animale smarrito

---

## 🎨 Design System

### Colori
- Primary Color: `rgb(255, 180, 112)` (Arancione caldo)
- Secondary Color: `rgb(255, 196, 141)` (Arancione chiaro)
- Hover Color: `rgb(240, 175, 114)` (Arancione scuro)

### Typography
- Font principale: Roboto
- Font decorativo: Comic Sans MS (titoli)

---

## 🐛 Bug Noti e Limitazioni

- JSON Server non supporta query string custom
- Le immagini sono salvate in base64 nel db.json
- La sincronizzazione del db.json con GitHub è manuale
- Nessun sistema di autenticazione utenti

---

## 🚀 Roadmap Futuri

- Implementare Firebase per database persistente
- Autenticazione utenti
- Pagina "Help Us" (volontariato, donazioni)
- Notifiche push per animali smarriti
- Dark mode
- Multilingual support
- Progressive Web App (PWA)

---

## 📄 Licenza

Questo progetto è sotto licenza MIT.

---

## 👨‍💻 Autore

Creato da **Mirko Mento** per il corso di React presso ITS ICT Piemonte (2025-2027).

---

**Fai la differenza. Aiuta gli animali. 🐾**
