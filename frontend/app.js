async function analyze(){

    const code =
    document.getElementById("code").value;


    const version =
    document.getElementById("version").value;


    const result =
    document.getElementById("result");


    if(code.length === 0){

        result.textContent =
        "コードを入力してください";

        return;
    }


    result.textContent =
    "解析中...";


    try{


        const response =
        await fetch(
        "https://あなたのRenderURL/analyze",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                code:code,

                version:version

            })
        });


        const data =
        await response.json();


        result.textContent =
        JSON.stringify(
            data,
            null,
            2
        );


    }catch(error){


        result.textContent =
        "サーバー接続エラー";


        console.log(error);

    }

}
