
import { buildAppointmentGraph } from './graph.ts';
import { OpenRouterService } from '../services/openRouterService.ts';
import { config } from '../config.ts';
import { AppointmentService } from '../services/appointmentService.ts';

export function buildGraph() {
  //Fazendo com injeção de depêndencia, ao criar o buildGraph ele já garante a criação e passa para frente.
  const llmClient = new OpenRouterService(config)
  const appointmentService = new AppointmentService()
  return buildAppointmentGraph(
    llmClient,
    appointmentService
  );
}

export const graph = async () => {
  return buildGraph();
};

