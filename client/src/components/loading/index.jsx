import React from 'react';
import './loading.scss';

const Loading = ({ visible }) => {
	return visible && <div className="loading">Loading..</div>;
}

export default Loading;