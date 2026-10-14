
$(document).ready(function () {

    // 功能一：顯示或隱藏自我介紹
    $("#toggleBtn").click(function () {
        $("#moreInfo").slideToggle(500);
    });

    // 功能二：Ajax 讀取 JSON 資料
    $("#loadProjects").click(function () {

        $("#projectList").text("正在載入專案資料...");

        $.getJSON("projects.json")
            .done(function (projects) {

                $("#projectList").empty();

                projects.forEach(function (project) {
                    const card = $("<div>")
                        .addClass("project-card");

                    $("<h3>").text(project.name).appendTo(card);

                    $("<p>").text(
                        "使用技術：" + project.language
                    ).appendTo(card);

                    $("<p>").text(
                        project.description
                    ).appendTo(card);

                    $("#projectList").append(card);
                });

            })
            .fail(function () {
                $("#projectList").text(
                    "載入失敗，請檢查 JSON 或伺服器設定。"
                );
            });

    });

});
