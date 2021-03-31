import React from "react";
import OrganizationItem from "../../parts/OrganizationItem";
import GoogleMap from "../../../globalParts/GoogleMap/GoogleMap";

export default function OrganizationContent({ organizations }) {
  return (
    <div className="organization-content-wrapper__container">
      <div className="organization-content-wrapper">
        {organizations &&
          organizations.map(organization => {
            return (
              <OrganizationItem
                key={organization.id}
                organization={organization}
              />
            );
          })}
        
      </div>
      {/* <div className="organization-content-map-wrapper">
        {organizations && (
          <GoogleMap
            organizations={organizations}
            className="organization-content-map"
          />
        )}
      </div> */}
    </div>
  );
}
