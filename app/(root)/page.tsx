import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react"

const Home = () => {
const loggedIn = {firstName: "Julio", lastName: "Vivas", email: "julio-vivas@att.net"};

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

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 1234.55}, {currentBalance: 5553}]}
      />
    </section>
  );
}

export default Home


