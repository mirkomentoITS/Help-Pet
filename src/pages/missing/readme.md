# State Toggle: Approcci a Confronto

## ❌ Approccio Fragile

```jsx
setAddMissing(!addMissing)
```

### Problema: Stale State

Il toggle usa il valore **potenzialmente vecchio** dello stato.

React può:
- Raggruppare aggiornamenti (batching)
- Ritardare i render
- Usare uno stato precedente in certe condizioni (più update rapidi, async, ecc.)

### Risultato

**Clicchi 2 volte velocemente** → Comportamento incoerente, non toggle

---

## ✅ Approccio Sicuro

```jsx
setAddMissing(prev => !prev)
```

### Perché Funziona

La **funzione di callback** riceve sempre lo stato **attuale garantito**:
- Non dipende da valori in memoria
- React gestisce l'ordine degli update
- Clicchi rapidi funzionano correttamente

---

## 📋 Regola d'Oro

Quando dipendi dal valore precedente dello stato:

> **Usa sempre la forma con callback** `setState(prev => ...)`

Non il valore diretto `setState(!value)`