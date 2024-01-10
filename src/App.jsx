import './App.css'
import PriceCard from "./Components/PriceCard/PriceCard"
function App() {
  const data = [
    {
      plan:"FREE",
      price: "0",
      features:{
        user:"✔ single User", storage:" ✔ 50MB Storage" , publicProjects : "✔ Unlimited Public Projects", access: "✔ Community Access", 
        privateProjects: "✖ Unlimited Private Projects" , phoneSupport:"✖ Dedicated Phone Support", subdomain : "✖ Free Subdomain",
        monthlyReports:"✖ Monthly Status Reports"
      },
      
    },
    {
      plan:"PLUS",
      price: "9",
      features:{
        user:"✔ 5 Users", storage:" ✔ 50MB Storage" , publicProjects : "✔ Unlimited Public Projects", access: "✔ Community Access", 
        privateProjects: "✔  Unlimited Private Projects" , phoneSupport:"✔  Dedicated Phone Support", subdomain : "✔ Free Subdomain",
        monthlyReports:"✖ Monthly Status Reports"
      },
    },
    {
      plan:"PRO",
      price: "49",
      features:{
        user:"✔ Unlimited Users", storage:" ✔ 50MB Storage" , publicProjects : "✔ Unlimited Public Projects", access: "✔ Community Access", 
        privateProjects: "✔  Unlimited Private Projects" , phoneSupport:"✔  Dedicated Phone Support", subdomain : "✔ Free Subdomain",
        monthlyReports:" ✔ Monthly Status Reports"
      },
    }
  ];

  return (
    <>
    
    <div style={{ display: 'flex' }}>
    {data.map((planInfo) => (
        <PriceCard planInfo={planInfo} key={`price-card-${planInfo.plan}`} />
      ))}

      
    </div>
     
    </>
  )
}

export default App