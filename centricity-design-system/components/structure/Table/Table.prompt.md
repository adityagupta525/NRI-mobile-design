Table is a compact hairline data table — fund comparison, capital-gains statements, holdings breakdown. Mark numeric columns with `numeric: true` for Tabular figures + right align.

```jsx
<Table columns={[{key:'fund',label:'Fund'},{key:'cagr',label:'3Y',align:'right',numeric:true}]} rows={[{fund:'Parag Parikh',cagr:'+22.4%'}]} />
```
