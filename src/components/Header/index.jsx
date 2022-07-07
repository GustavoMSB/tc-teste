import { Container } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GridViewIcon from "@mui/icons-material/GridView";
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import { Content } from "./styles";

export function Header({changeToList, changeToTable, status}) {
	return (
		<Content>
			<Container maxWidth="xl" className="container-header">
				<div className="data">
					<span>Painel de Recebimento</span>
					<span>Local: Centro de distribuição</span>
					<span>Data: 03/07/2022</span>
				</div>
				<div className="acess-button-group">
          <div className="type-layout">
            <button 
              className={status === "list" ? "active" : ""}
              onClick={changeToList}
            >
              <FormatListBulletedIcon />
            </button>
            <button
              className={status === "table" ? "active" : ""}
              onClick={changeToTable}  
            >
              <GridViewIcon />
            </button>
          </div>
					<button className="calendar-button">
						<DateRangeIcon />
					</button>
					<button className="store-button">
						<StoreIcon />
					</button>
					<button className="settings-button">
						<SettingsIcon />
            <span>Configurações</span>
					</button>
				</div>
			</Container>
		</Content>
	);
}
