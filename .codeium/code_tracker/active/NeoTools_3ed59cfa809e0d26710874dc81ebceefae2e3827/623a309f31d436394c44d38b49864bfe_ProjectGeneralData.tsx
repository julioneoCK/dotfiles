
_/home/julio/code/NeoTools/src/admin/singleProject/components/GeneralData/ProjectGeneralData.tsxĞ8import { PaperContainer } from "@/admin/singleProject/Project.styles";
import { EditedProjectData } from "@/admin/singleProject/models/singleProject.interface";
import {
  editAdminProjectDataSchema,
  editClientProjectDataSchema,
} from "@/admin/singleProject/schemas/editProjectData.schema";
import { useEditProjectGeneralDataService } from "@/admin/singleProject/services/editProjectGeneralData.service";
import { singleProjectStore } from "@/admin/singleProject/store/singleProject.store";
import { useGetDecodedToken } from "@/shared/hooks/useGetDecodedToken.hook";
import { CreationErrors } from "@/shared/models/client.interface";
import { ID_USER_ROL } from "@/shared/models/userRol";
import { useGetProjectById } from "@/shared/services/getProject.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Close, Edit, Save } from "@mui/icons-material";
import { Button, Divider, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import EditProjectData from "../EditProjectData/EditProjectData";
import ProjectDataVisualization from "../ProjectDataVisualization/ProjectDataVisualization";
import {
  ProjectDataContainer,
  ProjectDataSubtitle,
  ProjectDataTitle,
} from "./ProjectGeneralData.styles";
const ProjectGeneralData = () => {
  const [editProjectData, setEditProjectData] = useState(false);
  const { projectId, projectStatus } = singleProjectStore();
  const { data, isLoading } = useGetProjectById(projectId);
  const { roleId } = useGetDecodedToken();
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      roleId === ID_USER_ROL.ADMIN
        ? editAdminProjectDataSchema
        : editClientProjectDataSchema,
    ),
  });
  const initialFormValues = useMemo(
    () => ({
      codigo_proyecto: data?.proyecto.codigo_proyecto,
      nombre_proyecto: data?.proyecto.nombre_proyecto,
      nombre_proyecto_interno: data?.proyecto.nombre_proyecto_interno,
      fecha_contratacion_proyecto: data?.proyecto.fecha_contratacion_proyecto,
      fecha_fin_proyecto: data?.proyecto.fecha_fin_proyecto,
      nombre_contacto: data?.proyecto.nombre_contacto,
      apellidos_contacto: data?.proyecto.apellidos_contacto,
      email_contacto: data?.proyecto.email_contacto,
      texto_facilitadores: data?.context_fac.texto_facilitadores,
      imagen_facilitadores: data?.context_fac.imagen_facilitadores as string,
      video_facilitadores: data?.context_fac.video_facilitadores as string,
      recursos_nuevos_facilitadores: data?.context_fac.recursos,
      texto_participantes: data?.context_par.texto_participantes,
      imagen_participantes: data?.context_par.imagen_participantes as string,
      video_participantes: data?.context_par.video_participantes as string,
      recursos_nuevos_participantes: data?.context_par.recursos,
      id_usuario_pm: data?.proyecto.id_usuario_pm,
      logo_proyecto: data?.proyecto.logo_proyecto,
    }),
    [data],
  );
  useEffect(() => {
    if (data) {
      methods.reset(initialFormValues);
    }
  }, [data, methods, initialFormValues]);

  const handleDiscardChanges = () => {
    setEditProjectData(false);
    methods.reset(initialFormValues);
  };

  const handleEditProjectData = () => {
    methods.clearErrors();
    setEditProjectData(true);
  };

  const { mutateAsync: editGeneralProjectData } =
    useEditProjectGeneralDataService();

  const handleSaveChanges = async (formData: EditedProjectData) => {
    if (roleId) {
      try {
        await editGeneralProjectData({
          roleId,
          projectId,
          editedProject: formData,
        });
        setEditProjectData(false);
        toast.success("Datos de proyecto editados correctamente");
      } catch (error) {
        if (error instanceof Error && "errores" in error) {
          const customError = error as CreationErrors;
          if (customError.errores.imagen_facilitadores) {
            toast.error(customError.errores.imagen_facilitadores);
            return;
          }
          if (customError.errores.fecha_fin_proyecto) {
            toast.error(customError.errores.fecha_fin_proyecto);
            return;
          }
          methods.setError("video_facilitadores", {
            type: "custom",
            message: customError.errores.video_facilitadores,
          });
        }
      }
    }
  };
  useEffect(() => {
    return(() => {
      console.log(methods.getValues("logo_proyecto"), 'l')
    })
  }, [])
  console.log(methods.getValues("logo_proyecto"))
  return (
    <PaperContainer>
      <ProjectDataContainer>
        {editProjectData ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            sx={{
              position: "sticky",
              top: "0",
              zIndex: 2,
              backgroundColor: "white",
            }}
          >
            <Stack spacing={1} flexGrow={0.98}>
              <ProjectDataSubtitle>
                Editando datos de proyecto
              </ProjectDataSubtitle>
              <Divider />
            </Stack>
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                color="primary"
                endIcon={<Close />}
                size="medium"
                onClick={handleDiscardChanges}
                sx={{ width: "16rem" }}
              >
                Descartar cambios
              </Button>
              <Button
                form="edit-project-data"
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<Save />}
                size="medium"
                sx={{ width: "16rem" }}
              >
                Guardar cambios
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              position: "sticky",
              top: "0",
              zIndex: 2,
              backgroundColor: "white",
            }}
          >
            <Stack spacing={1} flexGrow={projectStatus !== 2 ? 0.9 : 1}>
              <ProjectDataTitle>Datos de proyecto</ProjectDataTitle> <Divider />
            </Stack>
            {projectStatus !== 2 && (
              <Button
                variant="contained"
                color="secondary"
                endIcon={<Edit />}
                sx={{ flexGrow: 0.08 }}
                size="medium"
                onClick={handleEditProjectData}
              >
                EDITAR DATOS
              </Button>
            )}
          </Stack>
        )}
        {editProjectData ? (
          <FormProvider {...methods}>
            <form
              id="edit-project-data"
              onSubmit={methods.handleSubmit(handleSaveChanges)}
            >
              <EditProjectData />
            </form>
          </FormProvider>
        ) : (
          <ProjectDataVisualization data={data} isLoading={isLoading} />
        )}
      </ProjectDataContainer>
    </PaperContainer>
  );
};
export default ProjectGeneralData;
¾ ¾Í
Í 
• 
•Û" 
Û"Ş" 
Ş"õ" õ"ú"
ú"Š# 
Š## 
#¼# 
¼#½# 
½#Ğ# 
Ğ#ğ# ğ#ü#
ü#ÿ# 
ÿ#ã0 ã0ù0
ù0ü0 ü0€1
€1é1 é1‘2
‘2¥2 ¥2§2
§2×2 ×2Ù2
Ù2ë2 ë2í2
í2œ3 œ33
3Ä3 Ä3Æ3
Æ3Ô3 Ô3Õ3
Õ3ã3 ã3ä3
ä34 4’4
’4”4 ”4•4
•4£4 £4¤4
¤4½4 ½4¿4
¿4È4 È4×4
×4Ğ8 "(3ed59cfa809e0d26710874dc81ebceefae2e3827*/home/julio/code/NeoTools2ffile:///home/julio/code/NeoTools/src/admin/singleProject/components/GeneralData/ProjectGeneralData.tsx: file:///home/julio/code/NeoTools