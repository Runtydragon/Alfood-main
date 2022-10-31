import { Paper, Table, TableContainer, TableHead, Link, TableBody, TableRow, TableCell, Button, Container, Box, AppBar, Toolbar, Typography } from "@mui/material"

import { useEffect, useState } from "react"
import http from "../../../http"
import IRestaurante from "../../../interfaces/IRestaurante"

import { Link as RouterLink } from "react-router-dom"



const AdministracaoRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        http.get<IRestaurante[]>("restaurantes/")
            .then(resposta => setRestaurantes(resposta.data))
    }, [])

    const excluir = (deletaRestaurante: IRestaurante) => {
        http.delete(`restaurantes/${deletaRestaurante.id}/`)
            .then(() => {
                const listaRestaurante = restaurantes.filter(restaurante => restaurante.id !== deletaRestaurante.id)
                setRestaurantes([...listaRestaurante])
            })
    }

    return (
        <>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6">
                            Administração
                        </Typography>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <Link component={RouterLink} to="/admin/restaurantes">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Restaurantes
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/restaurantes/novo">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Restaurante
                                </Button>
                            </Link>

                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Nome
                                        </TableCell>
                                        <TableCell>
                                            Editar
                                        </TableCell>
                                        <TableCell>
                                            Deletar
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {restaurantes.map(restaurante =>
                                        <TableRow key={restaurante.id}>
                                            <TableCell>
                                                {restaurante.nome}
                                            </TableCell>
                                            <TableCell>
                                                [ <RouterLink to={`/admin/restaurantes/${restaurante.id}`}> editar</RouterLink>]
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>
                                                    Excluir
                                                </Button>
                                            </TableCell>
                                        </TableRow>)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </Box>







        </>
    )

}

export default AdministracaoRestaurantes