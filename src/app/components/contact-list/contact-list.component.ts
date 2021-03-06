import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactInfo } from 'src/app/modals/contact-info.modal';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from '../../shared/constants/constants'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @ViewChild('contactInfoModal') contactInfoModal: any;
  @ViewChild('deleteContactModal') deleteContactModal: any;

  contactDetails: ContactInfo = { id: 0 };
  contactList: any = [];
  isEdit: any = false;
  recordDetailsToDelete: any = {};
  constructor(private sharedService: SharedService, private toastr: ToastrService) {
    //this.contactInfoModal = {}
  }

  ngOnInit(): void {
    this.getContactList();
  }

  getContactList() {
    this.sharedService.get().subscribe(data => {
      this.contactList = data;
    })
  }

  openEditContactModal(data: any) {
    this.isEdit = true;
    this.contactDetails = Object.assign({}, data);
  }

  containsObject(obj: any, list: any) {
    debugger
    for (let i = 0; i < list.length; i++) {
      let isExist = list[i].firstName == obj.firstName && list[i].lastName == obj.lastName && list[i].email == obj.email && list[i].phone == obj.phone;
      if ((isExist && !this.isEdit) || (isExist && this.isEdit && obj.id!=list[i].id)) {
        return true;
      }
    }

    return false;
  }

  createContact(cf: any): void {

    let isPresent = this.containsObject(this.contactDetails, this.contactList);

      if (isPresent) {
        this.toastr.error(Constants.ALREADY_EXIST_TOAST_MESSAGE, Constants.ALREADY_EXIST_TOAST_TITLE);
        return;
      }

    if (this.isEdit) {
      this.sharedService.put(this.contactDetails.id, this.contactDetails).subscribe(data => {
        this.contactInfoModal.nativeElement.click();
        this.toastr.success(Constants.UPDATE_TOAST_MESSAGE, Constants.UPDATE_TOAST_TITLE);
        this.getContactList();
      });
    } else {

      //let exist =  this.contactList.indexOf(cf.value);

      

      this.sharedService.post(cf.value).subscribe(data => {
        this.contactInfoModal.nativeElement.click();
        this.toastr.success(Constants.ADD_TOAST_MESSAGE, Constants.ADD_TOAST_TITLE);
        this.getContactList();
      })
    }
  }

  deleteContact() {
    this.sharedService.delete(this.recordDetailsToDelete.id).subscribe(data => {
      this.deleteContactModal.nativeElement.click();
      this.toastr.success(Constants.DELETE_TOAST_MESSAGE, Constants.DELETE_TOAST_TITLE);
      this.getContactList();
    })
  }

  clearModal(contactForm: NgForm) {
    this.isEdit = false;
    this.contactDetails = { id: 0 };
    contactForm.form.markAsPristine();
    contactForm.form.markAsUntouched();
  }

}
