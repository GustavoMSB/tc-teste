import styled from "styled-components";

export const Content = styled.header`
	background: #fff;
	color: #383838;
	width: 100%;
	padding: 1rem 0;
	border-top: 2px solid #5076f1;
	margin-bottom: 1rem;
	.container-header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.data {
			display: flex;
			gap: 0.5rem;

			@media (min-width: 797px) {
				span + span {
					&:before {
						content: "/";
						color: #b4b4c4;
						margin-right: 0.5rem;
					}
				}
			}

			@media (max-width: 797px) {
				flex-direction: column;
			}
		}

		.acess-button-group {
			display: flex;
			gap: 1.75rem;

			@media (max-width: 450px) {
				gap: 0.5rem;
			}

			button {
				border: 0;
				background: transparent;
				padding: 0.25rem;

				&.settings-button {
					color: #00a6f0;
					display: flex;
					align-items: center;
					gap: 0.25rem;
					text-transform: uppercase;
					font-weight: 700;
					font-size: 1.125rem;

					@media (max-width: 910px) {
						span {
							display: none;
						}
					}
				}

				&.active {
					background: #cccccc;
					border-radius: 0.5rem;
				}
			}
			.type-layout {
				display: flex;
			}
		}
	}
`;
