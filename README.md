# Zadání - Frontend developer

### 📚 Technologický stack

- React
- Tailwind CSS
- TypeScript
- Vite

### ⚙️ Spuštění projektu

```bash
npm install
npm run dev
```


---
### 📋 Zpracování zadání 
Vašim úkolem je vytvořit jednoduchou responzivní tabulku s kryptoměnami, která bude načtena z API CoinGecko.


#### 1) Načtení dat
Načtěte data z API CoinGecko:

**Endpoint:**  
```https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd```

**Požadovaná data v tabulce:**
- `id` (Coin ID)
- `symbol` (Symbol)
- `current_price` (Current Price)
- `market_cap` (Market Cap)
- `total_volume` (Total Volume)
- `last_updated` (Last Updated)
- `price_change_percentage_24h` (24h Change %)

---

#### 2) Tabulka
Vytvoř **responzivní tabulku** v **Reactu** s užitím **Tailwind CSS** dle návrhu ve Figmě, která zobrazí výše uvedené údaje.

[✏️ Odkaz na Figma návrh](https://www.figma.com/design/Uozh16JDyBbAzRQuIiFBPz/Twinpeak---frontend-assigment?node-id=0-1&t=GVU5iNWpWn0lJeMJ-1)



**Čas a datum** formátujte do čitelného formátu (např. `25 May 2023, 12:00`).  
**Sloupec `24h Change (%)`**:
- Pokud je hodnota **kladná** ➝ 🟢 **Zelená barva** 
- Pokud je hodnota **záporná** ➝ 🔴 **Červená barva**
- Zobrazte tabulku omezenou na 7 řádku. **Load more data** tlačítko bude zvyšovat počet o 7 řádků.
---
