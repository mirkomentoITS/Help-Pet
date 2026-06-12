## ❌ Approccio sbagliato

Se `onClose` viene messo sul bottone:

- il form si chiude subito al click anche se i campi non sono compilati
- la validazione del form viene bypassata

---

## ✔️ Approccio corretto

L’obiettivo è:

👉 chiudere il form solo dopo una compilazione valida

Per questo `onClose` va gestito in `handleSubmit`:

- se il form è valido viene eseguita la funzione e  
successivamente viene chiamato `onClose`, che chiude il form