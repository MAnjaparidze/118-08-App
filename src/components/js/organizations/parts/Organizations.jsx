import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom";
// import { Route, Link } from 'react-router-dom';
// import OrganizationPage from './OrganizationPage';


import OrganizationItem from './OrganizationItem';

export default function Organizations({ organizations, user }) {

    return (
        <div className="organization-render__container">
            <div className='organization-render__header'>
                <span>პოპულარული ორგანიზაციები</span>
            </div>

            <div className='organization-render__wrapper'>
                {organizations.map((organization) => {
                    return (
                        <OrganizationItem key={organization.id} user={user} organization={organization} />
                    );
                })}
            </div>
            <div className="next-page_container">
                <div className="next-page_container_center_wrapper">
                    <Link className="next-page" to='/ka-ge/organizations/4'>მეტის ნახვა</Link>
                </div>
            </div>
        </div>
    )
}
