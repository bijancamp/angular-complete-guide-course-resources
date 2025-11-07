import { Component } from '@angular/core';
import { Ticket } from './ticket.model';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: {title: string; text: string}) {
    this.tickets.push({
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    });
  }
}
