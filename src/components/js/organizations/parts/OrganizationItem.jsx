import React from 'react';
import CallIcon from '../../../../assets/img/icons/phone.svg';
import LocationIcon from '../../../../assets/img/icons/pin.svg';
import OrganizationIcon from '../../../../assets/img/icons/org.svg';
import OrganizationSmIcon from "../../../../assets/img/icons/org2.png";

import WithoutImage from '../../../../assets/img/org-no-picture-new.jpg';
import { Link } from 'react-router-dom';

import MenuIco from '../../../../assets/img/icons/menu.svg';
import DeliveryIco from '../../../../assets/img/icons/box.svg';
import bookmark from '../../../../assets/img/favorite.png';


export default function organizationItem({organization, user}) {

    var url_string = window.location.href;
    var url = new URL(url_string);

    const redirectToOrg = () => {
        window.location.href = `/ka-ge/organization/${organization.id}`;
    }

    const onBookmarkClick = async(e) => {
        e.preventDefault();
        if(user){
            alert(`${user.fname} ეს ორგანიზაცია შეინახა თქვენს ფავორიტებში`);
            const fetchItem = await fetch(`app=organizations/OrganizationApi&resource=setBookmark&org_id=${organization.id}`);
            const item = await fetchItem.json();
            console.log(item, organization);
        } else {
            alert("მხოლოდ მომხმარებლებს შეუძლიათ ორგანიზაციის დამახსოვრება")
        }
    }

    return (
        // <div className="organization__wrapper" onClick={() => redirectToOrg()}>
        <div className="organization__wrapper">
            <div className='organization__header__wrapper'>
                <div className='organization-title'>
                    <img src={organization.parent == 0 ? OrganizationIcon : OrganizationSmIcon} alt="" />
                    <Link className='organization-name' to={`/ka-ge/organization/${organization.id}`} title={organization.name}>{organization.name}</Link>
                    <img src={bookmark} alt="" className="bookmark-btn" onClick={(e) => {onBookmarkClick(e)}} />
                </div>
                <div className='organization-description out'>{organization.activity}</div>
                <div className="organization-rating-content">
                    <fieldset className="rating">
                        <input type="radio" id="star5" name="rating" value="5" /><label className= "full" htmlFor="star5" title="ძალიან კარგი - 5 ვარსკვლავი"></label>
                        <input type="radio" id="star4" name="rating" value="4" /><label className= "full" htmlFor="star4" title="საკმაოდ კარგი - 4 ვარსკვლავი"></label>
                        <input type="radio" id="star3" name="rating" value="3" /><label className= "full" htmlFor="star3" title="3 ვარსკვლავი"></label>
                        <input type="radio" id="star2" name="rating" value="2" /><label className= "full" htmlFor="star2" title="2 ვარსკვლავი"></label>
                        <input type="radio" id="star1" name="rating" value="1" /><label className= "full" htmlFor="star1" title="1 ვარსკვლავი"></label>
                    </fieldset>
                    <div className='organization-rating'>{organization.rate_count} შეფასება</div>
                </div>
            </div>
            {/* <div className='organization-image__wrapper' style={{backgroundImage: `url(` + (organization.image ? organization.image : WithoutImage) + ')'}}> */}
            <div onClick={() => redirectToOrg()} className='organization-image__wrapper' style={{backgroundImage: `url(` + (organization.logo ? '/uploads/' + organization.logo : WithoutImage) + ')'}}>
                <div className='organization-image'  />
                <div className='organization-address'>
                    <img src={LocationIcon} alt="" />
                    <span>{organization.address}</span>
                </div>
            </div>

            <div className='organization__footer__wrapper'>
                <div className='organization-working-hours'>{organization.work_hours}</div>
                <div className='organization-icons'>
                    <div className='organization-menu-icon'>
                    {organization.has_delivery === 1 && <img src={MenuIco} alt=""/>}
                    </div>
                    <div className='organization-box-icon'>
                    {organization.has_menu === 1 && <img src={DeliveryIco} alt=""/>}
                    </div>
                    <div className='organization-phone-icon'>
                        <a href={`tel:${organization.number}`} className='call-icon__wrapper'>
                            <img src={CallIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
