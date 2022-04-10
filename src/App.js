import React, { Component } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";

const apiCompanies = axios.create({
  baseURL: "https://localhost:44376/api/companies",
});
const apiEmployees = axios.create({
  baseURL: "https://localhost:44376/api/employee",
});

const styles = {
  appbar: {
    alignItems: "center",
  },
};

export default class App extends Component {
  state = {
    companies: [],
    employees: [],
  };

  constructor() {
    super();
    this.getCompanies();
    this.getEmployees();
  }

  getEmployees = async () => {
    let data = await apiEmployees.get("/").then(({ data }) => data);
    this.setState({ employees: data });
  };

  getCompanies = async () => {
    let data = await apiCompanies.get("/").then(({ data }) => data);
    this.setState({ companies: data });
  };

  render() {
    return (
      <Paper elevation={12} sx={{ p: 3 }}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Grid item sx={12}>
            <img
              src="http://www.izmirgaz.com.tr/design/logonewx.png"
              width="150"
              height="100"
            ></img>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <AppBar position="static" color="transparent">
              <Toolbar variant="dense">
                {this.state.companies.map((company) => (
                  <Typography
                    color={"#1CE0E1"}
                    variant="h6"
                    component="div"
                    key={company.Id}
                    align="center"
                    style={{ width: "100%", alignItems: "center" }}
                  >
                    {company.Title}
                  </Typography>
                ))}
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <AppBar position="static" style={{ background: "#4E9F3D" }}>
              <Toolbar variant="dense">
                <Typography
                  variant="h6"
                  color="inherit"
                  component="div"
                  align="center"
                  style={{ width: "100%", alignItems: "center" }}
                >
                  Yetkili Firma
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Card sx={{ maxWidth: 700 }}>
              <CardContent>
                {this.state.companies.map((company) => (
                  <Typography
                    color={"#37E04D"}
                    gutterBottom
                    variant="h3"
                    component="div"
                    align="center"
                    style={{ width: "100%", alignItems: "center" }}
                    key={company.Id}
                  >
                    {company.CompanyPerformance}
                  </Typography>
                ))}
                <Typography
                  color="text.secondary"
                  variant="h5"
                  align="center"
                  style={{ width: "100%", alignItems: "center" }}
                >
                  Firma
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="h5"
                  align="center"
                  style={{ width: "100%", alignItems: "center" }}
                >
                  Performans Puanı
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Card sx={{ maxWidth: 700 }}>
              <CardContent>
                {this.state.companies.map((company) => (
                  <Typography
                    color={"#37E04D"}
                    gutterBottom
                    variant="h3"
                    component="div"
                    align="center"
                    style={{ width: "100%", alignItems: "center" }}
                    key={company.Id}
                  >
                    {company.FirstTimeThrottle}
                  </Typography>
                ))}
                <Typography
                  color="text.secondary"
                  variant="h5"
                  align="center"
                  style={{ width: "100%", alignItems: "center" }}
                >
                  İlk Seferde
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="h5"
                  align="center"
                  style={{ width: "100%", alignItems: "center" }}
                >
                  Gaz Açma Yüzdesi
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            style={{ width: "100%" }}
          ></Grid>
          <Typography
            color="text.primary"
            align="left"
            style={{ width: "100%", alignItems: "left" }}
            gutterBottom
            variant="h5"
          >
            FİRMA BİLGİLERİ
          </Typography>
          <Grid
            item
            xs={12}
            container
            // direction="row"
            // justifyContent="left"
            // alignItems="left"
            spacing={3}
          >
            <Card sx={{ width: 1 }}>
              <CardContent sx={{ width: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  style={{ width: "100%", alignItems: "left" }}
                >
                  ADRES:
                </Typography>
                {this.state.companies.map((company) => (
                  <Typography
                    color="text.secondary"
                    variant="h6"
                    align="left"
                    style={{ width: "100%", alignItems: "left" }}
                    key={company.Id}
                    sx={{ p: 2 }}
                  >
                    {company.Address}
                  </Typography>
                ))}
                <Divider />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  style={{ width: "100%", alignItems: "left" }}
                  sx={{ p: 1 }}
                >
                  İLÇE:
                </Typography>
                {this.state.companies.map((company) => (
                  <Typography
                    color="text.secondary"
                    variant="h6"
                    align="left"
                    style={{ width: "100%", alignItems: "left" }}
                    key={company.Id}
                    sx={{ m: 1 }}
                  >
                    {company.District}
                  </Typography>
                ))}
                <Divider />

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  style={{ width: "100%", alignItems: "left" }}
                  sx={{ p: 1 }}
                >
                  TELEFON:
                </Typography>
                {this.state.companies.map((company) => (
                  <Typography
                    color="text.secondary"
                    variant="h6"
                    align="left"
                    style={{ alignItems: "left" }}
                    key={company.Id}
                    sx={{ m: 1 }}
                    xs={10}
                  >
                    {company.PhoneNumber}
                    <Button
                      variant="outlined"
                      xs={2} 
                      style={{ alignItems: "right" }}
                    >
                      Ara
                    </Button>
                  </Typography>
                ))}
                <Divider />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  style={{ width: "100%", alignItems: "left" }}
                  sx={{ p: 1 }}
                >
                  E-POSTA:
                </Typography>

                {this.state.companies.map((company) => (
                  <Typography
                    color="text.secondary"
                    variant="h6"
                    align="left"
                    style={{ width: "100%", alignItems: "left" }}
                    key={company.Id}
                    sx={{ m: 1 }}
                  >
                    {company.Email}
                    <Button
                      variant="outlined"
                      align="right"
                      style={{ alignItems: "right" }}
                    >
                      E-posta Gönder
                    </Button>
                  </Typography>
                ))}
                <Divider />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  style={{ width: "100%", alignItems: "left" }}
                  sx={{ p: 1 }}
                >
                  SAHİBİ/ORTAĞI:
                </Typography>
                {this.state.companies.map((company) => (
                  <Typography
                    color="text.secondary"
                    variant="h6"
                    align="left"
                    style={{ width: "100%", alignItems: "left" }}
                    key={company.Id}
                    sx={{ m: 1 }}
                  >
                    {company.Owner}
                  </Typography>
                ))}
                <Divider />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  style={{ width: "100%", alignItems: "left" }}
                  sx={{ p: 1 }}
                >
                  SAHİBİ/ORTAĞI TELEFON:
                </Typography>
                {this.state.companies.map((company) => (
                  <Typography
                    color="text.secondary"
                    variant="h6"
                    align="left"
                    style={{ width: "100%", alignItems: "left" }}
                    key={company.Id}
                    sx={{ m: 1 }}
                  >
                    {company.OwnerPhone}
                    <Button
                      variant="outlined"
                      align="right"
                      style={{ alignItems: "right" }}
                    >
                      Ara
                    </Button>
                  </Typography>
                ))}
                <Divider />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  style={{ width: "100%", alignItems: "left" }}
                  sx={{ p: 1 }}
                >
                  VİZE BİTİŞ TARİHİ
                </Typography>
                {this.state.companies.map((company) => (
                  <Typography
                    color="text.secondary"
                    variant="h6"
                    align="left"
                    style={{ width: "100%", alignItems: "left" }}
                    key={company.Id}
                    sx={{ m: 1 }}
                  >
                    {company.VizeStartDate}
                  </Typography>
                ))}
                <Divider />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  style={{ width: "100%", alignItems: "left" }}
                  sx={{ p: 1 }}
                >
                  SERTİFİKA BİTİŞ TARİHİ
                </Typography>
                {this.state.companies.map((company) => (
                  <Typography
                    color="text.secondary"
                    variant="h6"
                    align="left"
                    style={{ width: "100%", alignItems: "left" }}
                    key={company.Id}
                    sx={{ m: 1 }}
                  >
                    {company.VizeEndDate}
                  </Typography>
                ))}
              </CardContent>
            </Card>
            <Grid
              xs={12}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            ></Grid>
            <Typography
              color="text.primary"
              variant="h5"
              align="left"
              style={{ width: "100%", alignItems: "left" }}
              gutterBottom
            >
              PERSONEL BİLGİLERİ
            </Typography>
          </Grid>
          {this.state.employees.map((employee) => (
            <Grid
              xs={3}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" height="140" image="/images.png" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    key={employee.Id}
                    align="center"
                  >
                    {employee.Name + " " + employee.Surname}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {employee.Title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    style={{ width: "100%", alignItems: "center" }}
                  >
                    {employee.PhoneNumber}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    );
  }
}
