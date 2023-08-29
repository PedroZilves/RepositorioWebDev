const btnTask = document.getElementById("btnAdd");
const btnExcluirConcluidas = document.getElementById("btnExcluirConcluidas");
const btnAddPagaParte = document.getElementById("btnAddPagaParte");
const btnAddComDuracao = document.getElementById("btnAddComDuracao");
const btnListarPorImportancia = document.getElementById("btnListarPorImportancia");

const tabelaT = document.getElementById("tabTarefas");
//array das tarefas
let tarefas = [];
//Evt Listener para escutar o click no butao de adicionar tarefa, e puxando os valores escritos
btnTask.addEventListener("click", () => {
    const descricao = document.getElementById("descricao").value;
    const autor = document.getElementById("autor").value;
    const departamento = document.getElementById("departamento").value;
    const importancia = document.getElementById("importancia").value;
    const valor = document.getElementById("valor").value;

    const novaTarefa = {
        descricao,
        autor,
        departamento,
        importancia,
        valor,
        pagaSeparado: false,
        duracao: ""
    };
    //"empurra" a tarefa para a tabela
    tarefas.push(novaTarefa);
    atualizarTabela();
});

btnExcluirConcluidas.addEventListener("click", () => {
    tarefas = tarefas.filter(tarefa => !tarefa.concluida);
    atualizarTabela();
});
//mesma coisa mas com o pago a parte junto
btnAddPagaParte.addEventListener("click", () => {
    const descricao = document.getElementById("descricao").value;
    const autor = document.getElementById("autor").value;
    const departamento = document.getElementById("departamento").value;
    const importancia = document.getElementById("importancia").value;
    const valor = document.getElementById("valor").value;

    const novaTarefa = {
        descricao,
        autor,
        departamento,
        importancia,
        valor,
        pagaSeparado: true,
        duracao: ""
    };

    tarefas.push(novaTarefa);
    atualizarTabela();
});
//mesma coisa de novo so que com duração
btnAddComDuracao.addEventListener("click", () => {
    const descricao = document.getElementById("descricao").value;
    const autor = document.getElementById("autor").value;
    const departamento = document.getElementById("departamento").value;
    const importancia = document.getElementById("importancia").value;
    const duracao = document.getElementById("duracao").value;

    const novaTarefa = {
        descricao,
        autor,
        departamento,
        importancia,
        valor: "",
        pagaSeparado: false,
        duracao,
        concluida: false
    };

    tarefas.push(novaTarefa);
    atualizarTabela();
});
//butao pra listar por importancia, a função q faz isso ta la em baxo
btnListarPorImportancia.addEventListener("click", () => {
    listarTarefasPorImportancia();
});

function atualizarTabela() {
    tabelaT.innerHTML = `
        <tr>
            <th>Autor</th>
            <th>Departamento</th>
            <th>Descrição</th>
            <th>Importância</th>
            <th>Valor</th>
            <th>Pagamento Separado</th>
            <th>Duração</th>
            <th>Concluída</th>
            <th>Excluir</th>
        </tr>
    `;
//atualiza a tabela e cria um botao na para chamar a função de excluir a tarefa
    tarefas.forEach((tarefa, index) => {
        tabelaT.innerHTML += `
            <tr>
                <td>${tarefa.autor}</td>
                <td>${tarefa.departamento}</td>
                <td>${tarefa.descricao}</td>
                <td>${tarefa.importancia}</td>
                <td>${tarefa.valor}</td>
                <td>${tarefa.pagaSeparado ? 'Sim' : 'Não'}</td>
                <td>${tarefa.duracao}</td>
                <td><input type="checkbox" ${tarefa.concluida ? 'checked' : ''} onclick="marcarConcluida(${index}, this)"></td>
                <td><button onclick="excluirTarefa(${index})">Excluir</button></td>
            </tr>
        `;
    });
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    atualizarTabela();
}

function listarTarefasPorImportancia() {
    const listaImportancia = tarefas.slice();
    listaImportancia.sort((a, b) => {
        const importanciaOrdenada = { baixa: 2, media: 1, alta: 0 };
        // Primeiro, verifica se a tarefa 'a' foi concluída, se sim, coloca no final da lista
        if (a.concluida && !b.concluida) {
            return 1;
        }
        // Se a tarefa 'b' foi concluída e a 'a' não, coloca 'b' no final da lista
        if (!a.concluida && b.concluida) {
            return -1;
        }
        // Ambas as tarefas são concluídas ou ambas não são concluídas, ordena por importância
        return importanciaOrdenada[a.importancia] - importanciaOrdenada[b.importancia];
    });

    tabelaT.innerHTML = `
        <tr>
            <th>Autor</th>
            <th>Departamento</th>
            <th>Descrição</th>
            <th>Importância</th>
            <th>Valor</th>
            <th>Pagamento Separado</th>
            <th>Duração</th>
            <th>Concluída</th>
            <th>Excluir</th>
        </tr>
    `;

    listaImportancia.forEach((tarefa, index) => {
        tabelaT.innerHTML += `
            <tr>
                <td>${tarefa.autor}</td>
                <td>${tarefa.departamento}</td>
                <td>${tarefa.descricao}</td>
                <td>${tarefa.importancia}</td>
                <td>${tarefa.valor}</td>
                <td>${tarefa.pagaSeparado ? 'Sim' : 'Não'}</td>
                <td>${tarefa.duracao}</td>
                <td><input type="checkbox" ${tarefa.concluida ? 'checked' : ''} onclick="marcarConcluida(${index}, this)"></td>
                <td><button onclick="excluirTarefa(${index})">Excluir</button></td>
                
            </tr>
        `;
    });
}
function marcarConcluida(index, checkbox) {
    tarefas[index].concluida = checkbox.checked;
}