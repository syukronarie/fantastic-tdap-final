import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/states";
import "./FollowersList.css";

const FollowersList = (props) => {
  const {
    getUser,
    dispatchRequestGetUser,
    //   dispatchRequestGetUserInit
  } = props;

  useEffect(() => {
    dispatchRequestGetUser();
  }, [dispatchRequestGetUser]);

  return (
    <div className="followerslist-container">
      <div>
        {getUser.success ? (
          getUser.data.map((follower, index) => (
            <div
              className="follower-item"
              data-testid={`follower-item-${index}`}
            >
              <img src={follower.picture} alt="follower-profile" />
              <div className="followers-details">
                <div className="follower-item-name">
                  <h4>
                    {follower.title} {follower.firstName}
                  </h4>{" "}
                  <h4>{follower.lastName}</h4>
                </div>
                <p>ID: {follower.id}</p>
              </div>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowersList);
