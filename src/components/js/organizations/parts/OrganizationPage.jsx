import React, { useEffect, useState } from "react";
import Header from "../../globalParts/Header";
import OrganizationIcon from "../../../../assets/img/icons/org.svg";
import OrganizationSmIcon from "../../../../assets/img/icons/org3.png";
import MobileIcon from "../../../../assets/img/icons/phone.svg";
import EmailIcon from "../../../../assets/img/mail-bl.png";
import LocationIcon from "../../../../assets/img/pin.png";
import libra from "../../../../assets/img/org/libra.svg";
import mailbox from "../../../../assets/img/org/mailbox.svg";
import docs from "../../../../assets/img/org/docs.svg";
import employee from "../../../../assets/img/org/employee.svg";
import sun from "../../../../assets/img/org/sun.svg";
import calendar from "../../../../assets/img/org/calendar.svg";
import telephone from "../../../../assets/img/org/telephone.svg";
import wallclock from "../../../../assets/img/org/wall-clock.svg";
import OrganizationItem from "./OrganizationItem";
import Footer from "../../globalParts/Footer";
import GoogleMap from "../../globalParts/GoogleMap/GoogleMap";
import SliderContainer from "../../globalParts/Slider/Slider";
import WebIco from "../../../../assets/img/icons/internet.svg";
import FacebookIco from "../../../../assets/img/icons/facebook.svg";
import dropDownArrow from "../../../../assets/img/arrow-wt.png";

import LinkedInRoundIco from "../../../../assets/img/socials-round/linkedin-round.png";
import FBRoundIco from "../../../../assets/img/socials-round/fb-round.png";
import TwitterRoundIco from "../../../../assets/img/socials-round/twitter-round.png";

import ShareIco from "../../../../assets/img/icons/share.svg";
import MenuIco from "../../../../assets/img/icons/menu.svg";
import DeliveryIco from "../../../../assets/img/icons/box.svg";
import MoreIco from '../../../../assets/img/more.png';
import RightArrGreen from '../../../../assets/img/arrow-down.png'

import FixedSearch from "../../globalParts/FixedSearch";

import ReviewItem from "./reviews/ReviewItem";
import SubmitReview from "./reviews/SubmitReview";
import ArrowDown from "../../../../assets/img/arrow-down.png";

import ScrollToTopBtn from "../../scrollTop";
import MobileNavigation from "../../globalParts/MobileNavigation/MobileNavigation";
import SimilarOrgSlider from "../categories/parts/SimilarOrgSlider";

import OrgGallerySlider from '../categories/parts/OrganizationGallerySlider';

export default function OrganizationPage({ ...props }) {
  const [organization, setOrganization] = useState([]);
  const [organizationActivity, setOrganizationActivity] = useState([]);
  const [shareBtn, toggleShareBtn] = useState(false);

  const [voteCount, setVoteCount] = useState(0);
  const [sendReview, toggleSendReview] = useState(false);
  const [userReview, setUserReview] = useState("");

  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewItems, setReviewItems] = useState([]);
  const [similarOrganizations, setSimilarOrganizations] = useState(null);
  const [user, setUser] = useState(null);
  const [galleryShow, setGalleryShow] = useState(false);

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  useEffect(() => {
    fetchData();
    fetchSimilarOrgs();
  }, [props.match.params.id]);

  useEffect(() => {
    if (showAllReviews) {
      fetchReviewItem(5);
    } else {
      fetchReviewItem(2);
    }
  }, [showAllReviews]);

  const fetchData = async () => {
    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=orgById&id=${props.match.params.id}`
    );
    const item = await fetchItem.json();
    setUser(item.user);
    setOrganization(item.data[0]);
    setOrganizationActivity(item);
  };

  const fetchReviewItem = async reviewCount => {
    if (reviewCount >= 5) {
      let pseudoReview = [{}, {}, {}, {}, {}];
      setReviewItems(pseudoReview);
    } else {
      let pseudoReview = [{}, {}];
      setReviewItems(pseudoReview);
    }
  };

  const sendReviewFunc = async reviewCount => {
    const item = await fetch(
      // `/api/?app=organizations/OrganizationApi&resource=setVote&org_id=${props.match.params.id}&vote=3`
      `/api/?app=organizations/OrganizationApi&resource=setVote&org_id=${props.match.params.id}&vote=${voteCount}&desc=${userReview}`
    );
    const review = await item.json();
  };

  const fetchSimilarOrgs = async () => {
    const fetchItem = await fetch(
      `/api/?app=organizations/OrganizationApi&resource=similar&id=${props.match.params.id}`
    );
    const item = await fetchItem.json();

    setSimilarOrganizations(item.data);
  };

  const toggleGallery = async () => {
    setGalleryShow(!galleryShow ? true : false);
  };

  // organization phones
  let res = [];
  const phone_numbers = organization.phones;
  let phone = 0;

  if (phone_numbers == '') {
    phone = 0;
  } else {
    phone = phone_numbers && phone_numbers[0]['phone_number'].split(',')[0];
  }

  for (let i in phone_numbers) {
    let regex = /,/gi;
    res.push(phone_numbers);
    // let phone_numbers_split =  phone_numbers[i].phone_number.replace(regex, ', ');
    // res.push(phone_numbers_split);
  }

  let orgActivityRes = [];
  const orgActivity = organizationActivity.data;

  for (let x in orgActivity) {
    orgActivityRes.push(orgActivity[x].activity);
  }

  return (
    <div className="organization-page__wrapper">
      <Header user={user ? user : null} />
      <div
        className={
          galleryShow
            ? "organization-page__second-mid__wrapper gallery-show"
            : "organization-page__second-mid__wrapper"
        }
      >
        <div className="organization-page__info__wrapper">
          <div className="organization-page__profile">
            <div className="organization-page__profile__content">
              <div className="organization__header__wrapper organization__header__wrapper__single">
                <div className="organization-name_wrapper">
                  <img
                    src={
                      organization.parent == 0
                        ? OrganizationIcon
                        : OrganizationSmIcon
                    }
                    alt=""
                  />
                  <div
                    className="organization-name single-organization-name"
                    title={organization.name}
                  >
                    {organization ? organization.name : "Organization Name"}
                  </div>

                </div>
                <div className="organization-profile-working-hours__wrapper">
                  <span className="working-hours-header">
                    <img src={wallclock} />
                    სამუშაო საათები:{" "}
                  </span>
                  <span className="working-hours">
                    {organization.work_hours}
                  </span>
                </div>
              </div>
            </div>

            <div className="organization-profile-contact">
              <div className="organization-profile-mobile">
                <img src={MobileIcon} alt="" />

                <a href={`tel:${phone}`}>
                  <span>{phone ? phone : "არ მოიძებნა"}</span>
                </a>
              </div>
              <div className="organization-profile-webpage">
                {organization.web_address ? (
                  <a
                    href={`http://${organization.web_address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={WebIco} alt="" /> ვებსაიტი
                  </a>
                ) : (
                    <a>
                      <img src={WebIco} alt="" /> არ მოიძებნა
                  </a>
                  )}
              </div>
              {organization.email_address && (
                <div className="organization-profile-email">
                  <a href={`mailto:${organization.email_address}}`}>
                    <img src={EmailIcon} alt="" />
                  </a>
                </div>
              )}
            </div>

            <div className="organization-description_wrapper">
              <div className="organization-description-label">
                ორგანიზაციის საქმიანობა
              </div>
              <div className="organization-page-paragraph">
                {orgActivityRes.join(", ")}
              </div>
            </div>
            <div className='see-org-details--btn' onClick={e => { setShowMoreInfo(!showMoreInfo) }}>
              <img src={MoreIco} alt="" className='more-icon' />
              <img src={MoreIco} alt="" className='more-icon' />
              <span>დამატებითი დეტალები</span>
              <img src={RightArrGreen} alt="" className={showMoreInfo ? 'down-arrow-green' : 'right-arrow-green'} />
            </div>

            {
              !showMoreInfo ? (
                ''
              ) : (
                  <div className="organization-page__info">
                    <div className="organization-page__info__blocks">
                      <div className="organization-page__info__content">
                        <span className="info-header">
                          <img src={libra} />
                          იურიდიული სტატუსი:{" "}
                        </span>
                        <div className="corresponding-info__wrapper">
                          <span className="corresponding-info">
                            {organization.legal_status}
                          </span>
                        </div>
                      </div>
                      <div className="organization-page__info__content">
                        <span className="info-header">
                          <img src={docs} />
                          საიდენთიპიკაციო კოდი:{" "}
                        </span>
                        <div className="corresponding-info__wrapper">
                          <span className="corresponding-info">
                            {organization.ident_code}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="organization-page__info__blocks">
                      <div className="organization-page__info__content">
                        <span className="info-header">
                          <img src={mailbox} />
                          საფოსტო კოდი:{" "}
                        </span>
                        <div className="corresponding-info__wrapper">
                          <span className="corresponding-info">
                            {" "}
                            {organization.organization_index}{" "}
                          </span>
                        </div>
                      </div>

                      <div className="organization-page__info__content">
                        <span className="info-header">
                          <img src={sun} />
                          დასვენება:{" "}
                        </span>
                        <div className="corresponding-info__wrapper">
                          <span className="corresponding-info">
                            {/* {organization.day_offs} */}
                            {organization.day_offs == 0
                              ? "მუშაობს ყოველდრე"
                              : "უცნობი"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="organization-page__info__blocks">
                      <div className="organization-page__info__content">
                        <span className="info-header">
                          <img src={employee} />
                          დირექტორი:{" "}
                        </span>
                        <div className="corresponding-info__wrapper">
                          <span className="corresponding-info">
                            {organization.chief}
                          </span>
                        </div>
                      </div>
                      <div className="organization-page__info__content">
                        <span className="info-header">
                          <img src={calendar} />
                          დაარსების დრო:{" "}
                        </span>
                        <div className="corresponding-info__wrapper">
                          <span className="corresponding-info">
                            {organization.found_date}
                          </span>
                        </div>
                      </div>
                    </div>
                    {res.length < 1 ?
                      ('') : (
                        <div className="organization-page__info__blocks">
                          <div className="organization-page__info__content organization-page__info__content__mobile" style={{ width: "100%" }}>
                            <span className="info-header"><img src={telephone} /> ნომრები </span>
                            <div className="corresponding-info__wrapper">
                              <span className="corresponding-info">
                                {res.map((e, index) => {
                                  return (
                                    <span key={index}>{e[index].department}: {e[index].phone_number}<br /></span>
                                  );
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                )}

          </div>
          <div className="organization-rating-content organization-rating-content__single">
            <div className="organization-rating">
              {organization.rate_count} შეფასება
              </div>
            <fieldset className="rating">
              <input type="radio" id="star5" name="rating" value="5" />
              <label
                className="full"
                htmlFor="star5"
                title="ძალიან კარგი - 5 ვარსკვლავი"
              ></label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label
                className="full"
                htmlFor="star4"
                title="საკმაოდ კარგი - 4 ვარსკვლავი"
              ></label>
              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                checked
              />
              <label
                className="full"
                htmlFor="star3"
                title="3 ვარსკვლავი"
              ></label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label
                className="full"
                htmlFor="star2"
                title="2 ვარსკვლავი"
              ></label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label
                className="full"
                htmlFor="star1"
                title="1 ვარსკვლავი"
              ></label>
            </fieldset>
          </div>
          <div className="organization-gallery-wrapper">
            {console.log(organization)}
            <OrgGallerySlider />
          </div>
          <div className="organizaion-profile-location__wrapper">


            {(organization.has_delivery === 1 ||
              organization.has_menu === 1) && (
                <div className="organization-service-info_wrapper">
                  <a href="#" className="organization-service-menu">
                    <span>მენიუს ნახვა</span>
                    <img src={MenuIco} alt="" />
                  </a>

                  <div className="organization-service-line">
                    <div className="vertical-line"></div>
                  </div>

                  <div className="organization-service-delivery">
                    <span>მიტანის სერვისი</span>
                    <img src={DeliveryIco} alt="" />
                  </div>
                </div>
              )}

            <div className="google-map-content">
              <div className="organization-profile-location">
                <img src={LocationIcon} alt="" />
                <span>{organization.address}</span>
              </div>
              {organization && <GoogleMap organizations={organization} />}
            </div>
          </div>
        </div>
      </div>

      <div className="organization-page__similar-orgs__wrapper">
        <div className="organization-page_review_wrapper">
          <SubmitReview
            setVoteCount={setVoteCount}
            voteCount={voteCount}
            setUserReview={setUserReview}
            sendReviewFunc={() => sendReviewFunc()}
          />
          <div className="organization-page_review_inner">
            {reviewItems &&
              reviewItems.map((e, index) => {
                return <ReviewItem key={index} />;
              })}
            <div className="organization-page_review_btn">
              {/* <div className="additional-nav-row__btn__wrapper">
					<div
						className="additional-nav-row__btn"
						onClick={() => {
							setShowAllReviews(!showAllReviews);
						}}
						>
						<span>სხვა</span>
						<img src={ArrowDown} alt="" />
					</div>
					</div> */}
              <div class="next-page_container_center_wrapper">
                <a
                  class="next-page"
                  onClick={() => {
                    setShowAllReviews(!showAllReviews);
                  }}
                >
                  მეტის ნახვა
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 
          <span>მსგავსი კომპანიები</span> */}
        <div className="organization-page__similar-orgs">
          {/* {similarOrganizations &&
              similarOrganizations.map((element, index) => {
                return (
                  <OrganizationItem key={index} organization={element} />
                );
              })} */}
              {similarOrganizations && <SimilarOrgSlider organizations={similarOrganizations}  />}
        </div>
      </div>
      <ScrollToTopBtn />
      <MobileNavigation />
      {/* <Footer /> */}
      {/* <FixedSearch /> */}
    </div>
  );
}
