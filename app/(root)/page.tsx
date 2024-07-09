import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react"

const Home = () => {
const loggedIn = {firstName: "Julio"};

  return (
    <section className="home">
      <div className="home__content">
        <header className="home-header">
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transactions with ease."
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={11234.56}
          />
        </header>
      </div>
    </section>
  );
}

export default Home


