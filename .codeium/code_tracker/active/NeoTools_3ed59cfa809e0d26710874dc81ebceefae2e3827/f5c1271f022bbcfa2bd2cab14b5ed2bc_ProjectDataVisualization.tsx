
r/home/julio/code/NeoTools/src/admin/singleProject/components/ProjectDataVisualization/ProjectDataVisualization.tsx—import { SingleProjectResponse } from "@/admin/singleProject/models/singleProject.interface";
import { CircularProgress, Stack } from "@mui/material";
import DatosDeProyecto from "../DatosDeProyecto/DatosDeProyecto";
import ResponsablesDelProyecto from "../ResponsablesDelProyecto/ResponsablesDelProyecto";
import ContextualizacionFacilitador from "../ContextualizacionFacilitador/ContextualizacionFacilitador";
import ContextualizacionParticipante from "../ContextualizacionParticipante/ContextualizacionParticipante";
import SProjectLogoVisualization from "../project-logo-visualization/project-logo-visualization";

interface Props {
  data: SingleProjectResponse | undefined;
  isLoading: boolean;
}

const ProjectDataVisualization = ({ data, isLoading }: Props) => {
  console.log("visualizacion");
  return (
    <>
      {isLoading ? (
        <Stack
          spacing={2}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress />
        </Stack>
      ) : (
        <Stack spacing={5}>
          <DatosDeProyecto data={data?.proyecto} />
          <ResponsablesDelProyecto data={data?.proyecto} />
          <SingleProjectLogoVisualization logo_url={data?.proyecto.logo_proyecto} />
          <ContextualizacionFacilitador data={data?.context_fac} />
          <ContextualizacionParticipante data={data?.context_par} />
        </Stack>
      )}
    </>
  );
};
export default ProjectDataVisualization;
à 
àè èê
êÍ 
Íí íì
ìï ï°
°¢ ¢£
£ì	 
ì	¨	 ¨	±	
±	Ë	 
Ë	— "(3ed59cfa809e0d26710874dc81ebceefae2e3827*/home/julio/code/NeoTools2yfile:///home/julio/code/NeoTools/src/admin/singleProject/components/ProjectDataVisualization/ProjectDataVisualization.tsx: file:///home/julio/code/NeoTools