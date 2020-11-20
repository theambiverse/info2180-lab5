<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
$country='';
if (isset($_POST['lookup'])){
$country=$_POST['country'];}


  $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
  $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%' ");

  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  ?>
  <html>
    <style>
    table, td, th {
      text-align: center; 
      vertical-align: middle;
    border: 3px solid #272727;
  }
  th{
    font-size:24px;
  }
  table {
    margin-left: auto;
    margin-right: auto;
    width:1000px; 
    height:40px;
    border-collapse: collapse;
  }</style>
      <table >
      <tr> 
          <th> Name </th> 
          <th> Continent </th> 
          <th> Independence </th> 
          <th> Head of State </th> 
          
      </tr> 

  <?php foreach ($results as $row): ?>
    <tr><td><?php echo $row['name']; ?></td>
    <td><?php echo $row['continent'];?></td>
      <td><?php echo $row['independence_year'] ;?></td>
      <td> <?php echo $row['head_of_state']; ?></td>
    </tr>
  <?php endforeach; ?>
  </table>
  </html>

  
  

