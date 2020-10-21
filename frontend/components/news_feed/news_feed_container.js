import { connect } from 'react-redux';

import { fetchAllUsers } from '../../actions/session_actions';
import NewsFeed from './news_feed';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsFeed);