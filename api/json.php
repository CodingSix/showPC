<?php
$data = array('Status' =>200 ,
				'Message' => null,
				'data'=> array( 0 =>array(
									'pic'=> 'image/prefect.jpeg',
									'title'=>'MyTitle',
									'pv'=> 1000,
									'like'=>100,
									'author'=> 'MR.Wang',
									'link'=> '...'
										),
								1 => array(
									'pic'=> 'image/2.jpeg',
									'title'=>'MyTitle2',
									'pv'=> 1111,
									'like'=>111,
									'author'=> 'MR.Lang',
									'link'=> '...'
										),
								2 => array(
									'pic'=> 'image/12.jpg',
									'title'=>'MyTitle2',
									'pv'=> 1111,
									'like'=>111,
									'author'=> 'MR.Lang',
									'link'=> '...'
										),
								)
			 );
echo json_encode($data);

?>