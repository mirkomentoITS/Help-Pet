## ⏳ Side Fetch

Il `fetch` viene eseguito quando il componente viene montato.  
È un **effetto esterno al rendering** e viene gestito separatamente, senza bloccare la UI.

React prima esegue il render del componente, poi attiva l’effetto.  
In questo modo la pagina viene mostrata subito e i dati arrivano successivamente.

Se non funzionasse così, il rendering sarebbe bloccato fino al completamento del `fetch`, rendendo l’interfaccia lenta o vuota in attesa dei dati.

---

## 🕹️ Click Fetch

Il `fetch` viene eseguito quando l’utente preme il bottone.  
In questo caso non è legato al ciclo di vita del componente, ma a un **evento esplicito dell’utente**.

La UI è già stata renderizzata, quindi il `fetch` parte dopo l’interazione. È normale che l’utente attenda il risultato, perché ha richiesto direttamente un aggiornamento dei dati.


---

##  🔎 Fetch Filtri

Il filtro della fetch è stato costruito usando una funzione centralizzata  
che fa 3 fetch diverse grazie a delle query centralizzate passate come parametro.

La soluzione iniziale, meno efficiente, era quella di eseguire 3 funzioni al click  
di ogni bottone. Le funzioni avrebbero poi eseguito 3 fetch diverse:

- bottone1 `handleClick={noFilter}`  
- bottone2 `handleClick={filterAdopt}`  
- bottone3 `handleClick={filterGive}`