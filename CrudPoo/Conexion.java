package com.mycompany.mysqlconnection;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {

    String host = "mysql-2c696603-vallegrande-f835.k.aivencloud.com";
    String jdbc = "jdbc:mysql://" + host + ":15774/defaultdb";
    String user = "avnadmin";
    String password = "AVNS_guFnGY4F1dg7z7rHqFv";

    Connection con;

    public Conexion() {
        try {
            con = DriverManager.getConnection(jdbc, user, password);
        } catch (Exception e) {
            System.out.println("Error en la clase conexion" + e);
        }
    }

    public Connection getConexion() {
        return con;
    }
}
