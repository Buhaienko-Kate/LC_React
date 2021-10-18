import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    pageNumber: 1,
    usersPerPage: 3,
  };

  handlePrev = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  handleNext = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  render() {
    const { pageNumber, usersPerPage } = this.state;

    const startIndex = (pageNumber - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;

    const usersToRender = this.props.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          pageNumber={pageNumber}
          usersCount={this.props.users.length}
          usersPerPage={usersPerPage}
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
        />

        <ul className="users">
          {usersToRender.map(user => {
            return <User key={user.id} name={user.name} age={user.age} />;
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;
