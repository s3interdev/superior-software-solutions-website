import { gql } from 'graphql-request';

/* create blog post comment */
export const createComment = gql`
	mutation createComment(
		$name: String!
		$email: String!
		$comment: String!
		$slug: String!
	) {
		createComment(
			data: {
				name: $name
				email: $email
				comment: $comment
				post: { connect: { slug: $slug } }
			}
		) {
			id
		}
	}
`;

/* create client review */
export const createReview = gql`
	mutation createReview(
		$reviewerBusinessName: String!
		$reviewerName: String!
		$reviewerEmail: String!
		$reviewerPhoneNumber: String
		$review: String!
		$reviewRating: Int!
	) {
		createReview(
			data: {
				reviewerBusinessName: $reviewerBusinessName
				reviewerName: $reviewerName
				reviewerEmail: $reviewerEmail
				reviewerPhoneNumber: $reviewerPhoneNumber
				review: $review
				reviewRating: $reviewRating
			}
		) {
			id
		}
	}
`;
