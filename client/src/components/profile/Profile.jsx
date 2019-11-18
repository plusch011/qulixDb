import React from 'react';
import { connect } from 'react-redux';

function Profile({ userData }) {
    console.log(userData);
    return (
        <div className="profile">
            { userData.id }
        </div>
    );
};

const mapStateToProps = state => ({ userData: state });


export default connect(mapStateToProps)(Profile);