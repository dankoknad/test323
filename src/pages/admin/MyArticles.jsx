import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const MyArticles = ({articles, handleArticleRemove}) => {
	return (
		<div className="col-sm-6">
			{(articles.length) ? <h3>My articles:</h3> : null}
			{(articles.length)
				? <div className="list-group">
						<ReactCSSTransitionGroup
							component="div"
							transitionName="list-anim"
							transitionEnterTimeout={150}
							transitionLeaveTimeout={250}>
							{articles.map(article => (
								<div key={article.id} className="list-group-item">
									<div>{article.title}</div>
									<div>{article.body}</div>
									<div><code>{article.id}</code></div>
									<div className="text-right">
										<a
											href="#" 
											className="text-danger glyphicon glyphicon-remove"
											onClick={(e) => handleArticleRemove(e, article.id)}
										></a>
									</div>
								</div>
							))}
						</ReactCSSTransitionGroup>
					</div>
				: <h3>you don't have any articles yet</h3>
			}
		</div>
	);
};

export default MyArticles;
