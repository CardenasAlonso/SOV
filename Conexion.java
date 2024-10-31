/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.mysqlconnection;
import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Ricardo
 */
public class Conexion {
   
    Connection con;
    String user = "avnadmin";
    String password = "AVNS_guFnGY4F1dg7z7rHqFv";
    String puerto = "15774";
    String host = "mysql-2c696603-vallegrande-f835.k.aivencloud.com";
    String cadena = "jdbc:mysql://"+host+":"+puerto+"/ods";   
 
    public Connection establecerConexion(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(cadena,user,password);
            System.out.println("Se conecto a la base de datos");   
        } catch (Exception e) {
            System.out.println("Error al conectar a la base de datos: "+e);
        } return con;
    }
    
    public Connection getConexion(){
        return con;
    }
    
}
