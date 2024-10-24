
`/home/julio/code/NeoTools/src/admin/singleProject/components/EditProjectData/EditProjectData.tsxüimport { Stack } from "@mui/material";
import EditContextualizacionFacilitador from "../EditContextualizacionFacilitador/EditContextualizacionFacilitador";
import EditDatosDeProyecto from "../EditDatosDeProyecto/EditDatosDeProyecto";
import EditResponsablesDelProyecto from "../EditResponsablesDelProyecto/EditResponsablesDelProyecto";
import EditContextualizacionParticipante from "../EditContextualizacionParticipante.tsx/EditContextualizacionParticipante";
import { useFormContext } from "react-hook-form";
import ProjectLogoDrop from "@/admin/createProject/components/project-logo-drop/project-logo-drop";
import ProjectLogoVisualization from "@/admin/createProject/components/project-logo-visualization/project-logo-visualization";
import { useEffect } from "react";

const EditProjectData = () => {
  const { watch, setValue, getValues } = useFormContext();
  const logo_proyecto = watch("logo_proyecto");
  console.log(logo_proyecto, getValues("nombre_proyecto"));

  useEffect(() => {
    async function convertToFile() {
      const response = await fetch(logo_proyecto);
      const blob = await response.blob();

      const file = new File(
        [blob],
        `${logo_proyecto?.slice(logo_proyecto?.lastIndexOf("/") + 1)}`,
        {
          type: blob.type,
        },
      );
      setValue("logo_proyecto", file);
    }
    convertToFile();
  }, [logo_proyecto, setValue]);

  return (
    <Stack spacing={3}>
      <EditDatosDeProyecto />
      <EditResponsablesDelProyecto />
      {logo_proyecto ? <ProjectLogoVisualization file={logo_proyecto} deleteFunction={() => setValue("logo_proyecto", n)}/>: <ProjectLogoDrop />}
      <EditContextualizacionFacilitador />
      <EditContextualizacionParticipante />
    </Stack>
  );
};

export default EditProjectData;
Ì Ì„
„ £
£¤ ¤è
èö ö÷
÷ø øÿ
ÿ€ 
€¹ ¹Ç
ÇÚ 
Úâ 
âŒ 
Œ –
–— —©
©ª 
ªÙ 
ÙÛ ÛÜ
ÜŞ 
Şÿ 
ÿ€	 
€	¥	 
¥	¦	 ¦	­	
­	®	 ®	¼	
¼	½	 ½	Á	
Á	Â	 Â	Å	
Å	Ç	 
Ç	õ	 
õ	ö	 
ö	¡
 
¡
¢
 
¢
ò
 
ò
õ
 õ
ö

ö
Ü 
Üõ õö
ö 
• •¡
¡¢ 
¢î 
îü "(3ed59cfa809e0d26710874dc81ebceefae2e3827*/home/julio/code/NeoTools2gfile:///home/julio/code/NeoTools/src/admin/singleProject/components/EditProjectData/EditProjectData.tsx: file:///home/julio/code/NeoTools