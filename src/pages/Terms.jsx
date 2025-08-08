import React, { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] text-left py-10 flex flex-col gap-5">
      <p className="text-2xl text-[#76C6E0]">Terms & Conditions</p>
      <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-5">
        <div className="flex justify-center">
          <img
            src="/home/logo.png"
            className="w-40"
            alt="Special-offers-on-crypto-mining-machines-in-abu-dhabi-UAE"
            title="Explore top-tier CRYPTO MINING MACHINES IN UAE at Dahab Miners. Specializing in high-efficiency ASIC miners in Abu Dhabi, UAE, we offer the best solutions for crypto mining in UAE. Browse our range today and enhance your mining setup!"
          ></img>
        </div>
        <h1 className="my-8 text-3xl font-semibold text-center">
          Dahab Miners – Terms & Conditions & AML/KYC Policy
        </h1>
        <p className="text-sm my-3">Effective Date - 01/08/2025</p>
        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-semibold">
            1. Anti-Money Laundering (AML) & Know Your Customer (KYC) Policy
          </h4>
          <p>
            Dahab Miners is committed to full compliance with applicable
            Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF)
            laws and regulations in all jurisdictions where we operate.
          </p>
          <ul className="flex flex-col gap-2 ms-5">
            <li>1.1 Purpose</li>
            <p>
              This AML/KYC policy is designed to prevent our platform from being
              used for money laundering, terrorist financing, fraud, or any
              other financial crime.
            </p>
            <li>1.2 KYC Requirement</li>
            <ul className="ms-5 flex flex-col gap-2">
              <li>
                - Every customer must complete identity verification (KYC)
                before any withdrawal of funds from the platform.
              </li>
              <li>
                - Dahab Miners will contact the customer using the email address
                provided during account registration to initiate KYC.
              </li>
              <li>
                - Failure to complete KYC within the time frame specified by
                Dahab Miners will result in:
                <ul className="ms-5 flex flex-col gap-2">
                  <li>- Suspension of payouts</li>
                  <li>
                    - Inability to withdraw any balance until verification is
                    complete
                  </li>
                </ul>
              </li>
            </ul>
            <li>1.3 KYC Information Collected</li>
            <div className="ms-5 flex flex-col gap-2">
              <p>- Full legal name</p>
              <p>- Date of birth</p>
              <p>- Country of residence and nationality</p>
              <p>
                - Valid government-issued photo identification (passport,
                national ID, or driving license)
              </p>
              <p>
                - Proof of address (utility bill, bank statement, or government
                correspondence dated within the last 3 months)
              </p>
              <p>
                - For businesses: company registration documents, business
                license, UBO declaration, and proof of address
              </p>
            </div>
            <li>1.4 Ongoing Monitoring</li>
            <div className="flex flex-col gap-2 ms-5">
              <p>
                - Dahab Miners may, at any time, request updated KYC documents.
              </p>
              <p>
                - Accounts showing suspicious activity (e.g., unusual
                withdrawals, sudden large deposits) may be suspended pending
                review.
              </p>
              <p>
                - We may refuse or reverse any transaction if it violates
                AML/CTF laws.
              </p>
            </div>
            <li>1.5 Sanctions & Prohibited Jurisdictions</li>
            <p>
              We do not provide services to individuals or businesses located
              in, or associated with, jurisdictions under sanctions or
              prohibited by our compliance partners. Dahab Miners reserves the
              right to update this list without notice.
            </p>
          </ul>
          <h4 className="text-2xl font-semibold">
            2. Nature of Our Service – Digital Miners
          </h4>
          <ul className="ms-5 flex flex-col gap-2">
            <li>2.1 Digital Miners Are Not Physical Machines</li>
            <p>
              When you purchase a “Digital Miner” through Dahab Miners, you are
              not purchasing a physical cryptocurrency mining machine. Instead,
              you are purchasing a digital contract backed by real mining
              operations.
            </p>
            <li>2.2 Backing by Real Hardware</li>
            <p>
              Each Digital Miner is linked to real miners in Dahab’s operational
              farms. The performance of your Digital Miner is tied to the
              hashrate and uptime of these real-world miners.
            </p>
            <li>2.3 No Direct Ownership of Hardware</li>
            <p>
              Owning a Digital Miner does not grant you any ownership rights,
              possession, or control over any physical mining hardware.
            </p>
          </ul>
          <h4 className="text-2xl font-semibold">
            3. Performance, Uptime & Downtime Disclaimer
          </h4>
          <ul className="ms-5 flex flex-col gap-2">
            <li>3.1 Uptime Dependency</li>
            <div className="ms-5 flex flex-col gap-2">
              <p>
                - Your Digital Miner’s uptime will match the uptime of the
                corresponding real-world miners.
              </p>
              <p>
                - Any downtime in the physical mining facility (e.g., due to
                maintenance, repairs, power outages, or other disruptions) will
                result in proportional downtime for your Digital Miner.
              </p>
            </div>
            <li>3.2 No 100% Uptime Guarantee</li>
            <p>
              We do not guarantee uninterrupted operation of mining services.
              Mining performance may be affected by:
            </p>
            <div className="ms-5 flex flex-col gap-2">
              <p>- Hardware failures</p>
              <p>- Network outages</p>
              <p>- Power interruptions</p>
              <p>- Maintenance schedules</p>
              <p>- Force majeure events</p>
            </div>
          </ul>
          <h4 className="text-2xl font-semibold">
            4. Earnings, Calculations & Risk Factors
          </h4>
          <ul className="ms-5 flex flex-col gap-2">
            <li>4.1 Revenue Payout Modes</li>
            <div className="ms-5 flex flex-col gap-2">
              <p>
                - Profit Mode: Earnings are credited daily after deducting
                electricity/hosting costs.
              </p>
              <p>
                - Hold Mode: Entire BTC payout is credited to you; hosting fees
                must be paid separately in advance.
              </p>
            </div>
            <li>4.2 Calculators & ROI Predictions</li>

            <div className="ms-5 flex flex-col gap-2">
              <p>
                - Our app contains various calculators to estimate ROI, total
                profits, and performance comparisons (e.g., “Buying Bitcoin vs.
                Buying a Digital Miner”).
              </p>
              <p>
                - All calculator outputs are projections only and are not
                guaranteed.
              </p>
            </div>
            <li>4.3 Risk Factors</li>
            <p>
              Mining profitability depends on multiple external variables
              outside Dahab Miners’ control, including:
            </p>
            <div className="ms-5 flex flex-col gap-2">
              <p>- Bitcoin price fluctuations</p>
              <p>- Mining difficulty changes</p>
              <p>- Network hashrate changes</p>
              <p>- Electricity cost variations</p>
              <p>- Unforeseen downtime</p>
            </div>
            <li>4.4 No Financial Advice</li>
            <p>
              All information provided is for educational purposes only. Dahab
              Miners does not provide investment advice.
            </p>
            <div className="ms-5 flex flex-col gap-2">
              <p>- Bitcoin price fluctuations</p>
              <p>- Mining difficulty changes</p>
              <p>- Network hashrate changes</p>
              <p>- Electricity cost variations</p>
              <p>- Unforeseen downtime</p>
            </div>
          </ul>
          <h4 className="text-2xl font-semibold">
            5. Payouts, Withdrawals & Fees
          </h4>
          <ul className="ms-5 flex flex-col gap-2">
            <li>5.1 Withdrawal Eligibility</li>
            <div className="ms-5 flex flex-col gap-2">
              <p>
                - Payouts are processed only for accounts that have completed
                KYC verification.
              </p>
              <p>
                - Withdrawals are subject to minimum thresholds as displayed in
                the app.
              </p>
            </div>
            <li>5.2 Hosting & Electricity Fees</li>

            <div className="ms-5 flex flex-col gap-2">
              <p>
                - In Profit Mode, fees are deducted automatically from mining
                earnings.
              </p>
              <p>
                - In Hold Mode, unpaid hosting fees will result in suspension of
                mining until settlement.
              </p>
            </div>
          </ul>
          <h4 className="text-2xl font-semibold">6. User Responsibilities</h4>
          <p>You agree to:</p>
          <div className="ms-5 flex flex-col gap-2">
            <p>- Provide accurate and up-to-date personal information.</p>
            <p>- Maintain account security (passwords, 2FA, etc.).</p>
            <p>
              - Not engage in fraudulent or unlawful activities through the
              platform.
            </p>
          </div>
          <h4 className="text-2xl font-semibold">7. Limitation of Liability</h4>
          <div className="ms-5 flex flex-col gap-2">
            <p>
              - Dahab Miners is not liable for losses due to market
              fluctuations, changes in mining difficulty, or any downtime beyond
              our control.
            </p>
            <p>
              - Maximum liability is limited to the total amount you paid for
              your Digital Miner contract.
            </p>
          </div>
          <h4 className="text-2xl font-semibold">
            8. Governing Law & Disputes
          </h4>
          <div className="ms-5 flex flex-col gap-2">
            <p>
              - These Terms & Conditions are governed by the laws of the United
              Arab Emirates.
            </p>
            <p>
              - Any disputes will be resolved in the competent courts of Abu
              Dhabi, UAE.
            </p>
          </div>
          <p className="my-5">
            By using the Dahab Miners platform, you confirm that you have read,
            understood, and agreed to these Terms & Conditions, including our
            AML/KYC policy.
          </p>
        </div>
      </div>
    </div>
  );
}
