import React from 'react';

const Friend = props => {
    const { friend } = props;
    return (
        <div>
            {friend.name}
        </div>
    )
}

export default Friend;