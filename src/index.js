import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './comment_detail';
import faker from 'faker';
import ApprovalCard from './approval_card';

const App = () => {
	return (	


		<div className="ui container comments">

		<ApprovalCard>
				<div><h4>Warning</h4>Are you sure you want to do this</div>
		</ApprovalCard>

		<ApprovalCard >
			<CommentDetail 
					author="Sam" 
					timeAgo="Today at 5::15pm" 
					commentText="Hey hey Hey Hockytown"
					avatar={faker.image.avatar()} />
		</ApprovalCard>

		<ApprovalCard >
			<CommentDetail 
					author="Alex" 
					timeAgo="Yesterday ae 3pm" 
					commentText="Nice! You React well"
					avatar={faker.image.avatar()}/>
		</ApprovalCard>
		
		<ApprovalCard>			
			<CommentDetail 
					author="Jane" 
					timeAgo="One Week ago at 2:15am" 
					commentText="What the what?!"
					avatar={faker.image.avatar()} />
		</ApprovalCard>

		</div>

			);
}


ReactDOM.render(<App />, document.querySelector('#root'));