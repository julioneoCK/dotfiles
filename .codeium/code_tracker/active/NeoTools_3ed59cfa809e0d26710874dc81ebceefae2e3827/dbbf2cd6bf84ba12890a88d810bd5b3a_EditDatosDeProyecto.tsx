
h/home/julio/code/NeoTools/src/admin/singleProject/components/EditDatosDeProyecto/EditDatosDeProyecto.tsxÀimport { useGetDecodedToken } from "@/shared/hooks/useGetDecodedToken.hook";
import { ID_USER_ROL } from "@/shared/models/userRol";
import {
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const EditDatosDeProyecto = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  console.log(watch("l"))
  const { roleId } = useGetDecodedToken();

  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Stack direction="column" spacing={3} marginTop={1.5}>
      <Stack direction={isMobileSize ? "column" : "row"} spacing={2}>
        {roleId === ID_USER_ROL.ADMIN && (
          <Stack direction="column" width={isMobileSize ? "100%" : "40%"}>
            <TextField
              label="C√≥digo de Proyecto*"
              InputLabelProps={{ shrink: true }}
              helperText={
                errors.codigo_proyecto?.message?.toString() ?? "Ejemplo: 45612"
              }
              {...register("codigo_proyecto")}
              error={!!errors.codigo_proyecto}
            />
          </Stack>
        )}

        <Stack direction="column" width="100%">
          <TextField
            label="Nombre del proyecto*"
            InputLabelProps={{ shrink: true }}
            fullWidth
            {...register(roleId === ID_USER_ROL.ADMIN ? "nombre_proyecto_interno" : "nombre_proyecto")}
            error={!!errors.nombre_proyecto_interno}
            helperText={
              errors.nombre_proyecto?.message?.toString() ??
              "Ejemplo: COE Navarra"
            }
            disabled={roleId !== ID_USER_ROL.ADMIN}
          />
        </Stack>
        {roleId === ID_USER_ROL.ADMIN && (
          <Stack direction="column" width="100%">
            <TextField
              label="Nombre visible para usuarios*"
              InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("nombre_proyecto")}
              error={!!errors.nombre_proyecto}
              helperText={
                errors.nombre_proyecto?.message?.toString() ??
                "Ejemplo: Proyecto Transformaci√≥n Digital Navarra"
              }
            />
          </Stack>
        )}
      </Stack>
      {roleId === ID_USER_ROL.ADMIN && (
        <Typography color="textSecondary">
          Aclaraci√≥n: Las fechas indicadas son solo informativas, no se
          realizar√° activaci√≥n ni desactivaci√≥n autom√°tica del proyecto.
        </Typography>
      )}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Fecha de firma de contrato"
          type="date"
          {...register("fecha_contratacion_proyecto")}
          error={!!errors.fecha_contratacion_proyecto}
          helperText={
            errors.fecha_contratacion_proyecto?.message?.toString() ??
            "Formato: DD/MM/AAAA"
          }
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          disabled={roleId !== ID_USER_ROL.ADMIN}
        />
        <TextField
          label="Fecha estimada de finalizaci√≥n"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          type="date"
          {...register("fecha_fin_proyecto")}
          error={!!errors.fecha_fin_proyecto}
          helperText={
            errors.fecha_fin_proyecto?.message?.toString() ??
            "Formato: DD/MM/AAAA"
          }
          disabled={roleId !== ID_USER_ROL.ADMIN}
        />
      </Stack>
    </Stack>
  );
};

export default EditDatosDeProyecto;
Ã Ã—
—ì 
ì≠ 
≠À "(3ed59cfa809e0d26710874dc81ebceefae2e3827*/home/julio/code/NeoTools2ofile:///home/julio/code/NeoTools/src/admin/singleProject/components/EditDatosDeProyecto/EditDatosDeProyecto.tsx: file:///home/julio/code/NeoTools