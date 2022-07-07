import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	border-collapse: collapse;
  position: relative;
`;

export const Table = styled.table`
	border: 1px solid #000;
	margin-top: 2rem;
	background: #fff;
	border-collapse: collapse;

  &.hours_table {
    position: absolute;
    left: 0;
    width: 11%;

    @media (max-width: 768px){
      width: 20%;
      z-index: 3;
    }
  }
  th,
	tr,
	td {
    padding: 0 1rem;
		border: 1px solid #000;
		text-align: center;
		font-size: 1rem;
		height: 80px;

    @media (max-width: 768px){
      font-size: 12px;
    }
	}
	.FREE {
		background: #ddefda;
	}

	.PENDING {
		background: #fdf8e5;
	}

	.BLOCKED {
		background: #f5dede;
	}
`;

export const ScrollTable = styled.div`
  position: absolute;
  left: 11%;
  display: flex;
  max-width: 85%;
  overflow-x: scroll;

  @media (max-width: 768px){
    left: 20%;
    max-width: 80%;
  }
`;
