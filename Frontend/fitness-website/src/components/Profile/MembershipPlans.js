import React from "react";

const MembershipPlans = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Membership Plans</h2>
      <p>Current Membership: 6-Month Plan (Active)</p>
      <p>Expired Membership: 1-Month Plan (Expired)</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Renew Membership
      </button>
      <button className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded">
        Purchase Membership
      </button>
    </div>
  );
};

export default MembershipPlans;
