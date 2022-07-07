import { Container, Grid } from "@mui/material";
import { Item } from "./styles";

export function Delivieres() {
	return (
		<Container maxWidth="xl">
			<Grid container spacing={2}>
				<Grid item xs={4} md={2}>
					<Item>
						<p>Total</p>
						<span>7</span>
					</Item>
				</Grid>
				<Grid item xs={4} md={2}>
					<Item>
						<p>Pendentes</p>
						<span>7</span>
					</Item>
				</Grid>
				<Grid item xs={4} md={2}>
					<Item>
						<p>Veículos presentes</p>
						<span>7</span>
					</Item>
				</Grid>
				<Grid item xs={4} md={2}>
					<Item>
						<p>Em descarga</p>
						<span>7</span>
					</Item>
				</Grid>
				<Grid item xs={4} md={2}>
					<Item>
						<p>Concluídas</p>
						<span>7</span>
					</Item>
				</Grid>
				<Grid item xs={4} md={2}>
					<Item>
						<p>Não realizadas</p>
						<span>7</span>
					</Item>
				</Grid>
			</Grid>
		</Container>
	);
}
